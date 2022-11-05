import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { io } from "socket.io-client";
import { AnimatePresence } from "framer-motion";

import Sidebar from "../../components/Sidebar";
import Dashboard from "../../components/Dashboard";
import CalendarDate from "../../components/CalendarDate";

import ShowModal from "../../components/ShowModal";
import CardModal from "../../components/CardModal";
import NoticeModal from "../../components/NoticeModal";
import MessageModal from "../../components/MessageModal";
import JoinGroupModal from "../../components/JoinGroupModal";
import ManageGroupModal from "../../components/ManageGroupModal";
import MyGroupListModal from "../../components/MyGroupListModal";

import { fetchData } from "../../utils/fetchData";

import { Wrapper, Content } from "./style";

function Layout() {
  const { user_id } = useParams();

  const [role, setRole] = useState(null);
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState(null);
  const [groupList, setGroupList] = useState([]);
  const { isModalOpen, modalType } = useSelector((state) => state.modal);

  useEffect(() => {
    const getUserInfo = async () => {
      if (!user_id) {
        return setRole("GUEST");
      }

      const res = await fetchData(`/users/${user_id}`, "GET");

      if (res.status === 403) {
        // const { message } = await res.json();
        const { message } = res.data;
        return console.error(message);
      }

      const userInfo = res.data;

      setRole(userInfo.role);
      setUsername(userInfo.nickname);
      setGroupList(userInfo.groups?.map((group) => group.groupName));
    };

    getUserInfo();
  }, []);

  useEffect(() => {
    const socketIO = io.connect(process.env.REACT_APP_SERVER_REQUEST_HOST, {
      transports: ["websocket", "polling"],
      withCredentials: true,
    });
    setSocket(socketIO);

    return () => {
      socketIO.disconnect();
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Sidebar
          role={role}
          username={username}
          socket={socket}
          groupList={groupList}
        />
        <Content>
          <CalendarDate />
          <Dashboard socket={socket} />
        </Content>
      </Wrapper>
      <AnimatePresence mode="wait" initial={false}>
        {isModalOpen && (
          <ShowModal>
            {modalType === "joinGroup" && <JoinGroupModal />}
            {modalType === "createNotice" && (
              <NoticeModal
                socket={socket}
                adminId={user_id}
                groupList={groupList}
              />
            )}
            {modalType === "message" && <MessageModal socket={socket} />}
            {modalType === "manageGroup" && <ManageGroupModal />}
            {modalType === "handleCard" && <CardModal socket={socket} />}
            {modalType === "myGroupList" && <MyGroupListModal />}
          </ShowModal>
        )}
      </AnimatePresence>
    </>
  );
}

export default Layout;
