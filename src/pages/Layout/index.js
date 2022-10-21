import { Wrapper } from "./style";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import MiniSidebar from "../../components/MiniSidebar";
import Main from "../../components/Main";
import ShowModal from "../../components/ShowModal";
import JoinGroupModal from "../../components/JoinGroupModal";
import ManageGroupModal from "../../components/ManageGroupModal";
import MessageModal from "../../components/MessageModal";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("MEMBER");
  const { isModalOpen, modalType, message } = useSelector(
    (state) => state.modal
  );
  const { user_id } = useParams();
  console.log("user_id: ", user_id);

  useEffect(() => {
    async function getUserInfo() {
      if (user_id === "guest") {
        setRole("GUEST");
        return;
      }

      const res = await fetch(
        `${process.env.REACT_APP_SERVER_REQUEST_HOST}/users/${user_id}`,
        {
          method: "GET",
        }
      );
      if (res.status === 200) {
        const { userInfo } = await res.json();

        setRole(userInfo.role);
      }
    }

    getUserInfo();
  }, []);

  return (
    <>
      {isModalOpen && (
        <ShowModal>
          {modalType === "message" && <MessageModal message={message} />}
          {modalType === "joinGroup" && <JoinGroupModal />}
          {modalType === "manageGroup" && <ManageGroupModal />}
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
