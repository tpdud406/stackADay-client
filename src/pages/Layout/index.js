import { Wrapper } from "./style";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import MiniSidebar from "../../components/MiniSidebar";
import Main from "../../components/Main";
import ShowModal from "../../components/ShowModal";
import JoinGroupModal from "../../components/JoinGroupModal";
import MessageModal from "../../components/MessageModal";
import NoticeModal from "../../components/NoticeModal";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("ADMIN");
  const { isModalOpen, modalType, message } = useSelector(
    (state) => state.modal
  );

  const [socket, setSocket] = useState();

  useEffect(() => {
    const socketIO = io.connect(process.env.REACT_APP_SERVER_REQUEST_HOST);
    setSocket(socketIO);

    return () => {
      socketIO.disconnect();
    };
  }, []);

  return (
    <>
      {isModalOpen && (
        <ShowModal>
          {modalType === "joinGroup" && <JoinGroupModal />}
          {modalType === "createNotice" && <NoticeModal socket={socket} />}
          {modalType === "message" && <MessageModal message={message} />}
        </ShowModal>
      )}
      <Wrapper>
        {isOpen ? (
          <Sidebar setIsOpen={setIsOpen} role={role} />
        ) : (
          <MiniSidebar setIsOpen={setIsOpen} role={role} />
        )}
        <Main />
      </Wrapper>
    </>
  );
}

export default Layout;
