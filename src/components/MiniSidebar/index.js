import { Wrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function MiniSidebar({ setIsOpen, role }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    alert("로그아웃 되셨습니다."); // 알람 모달창 ui 나오면 변경 필요.
    navigate("/login");
  }

  return (
    <Wrapper>
      <FontAwesomeIcon
        icon={faBars}
        className="bars"
        onClick={() => setIsOpen(true)}
      />
      {role !== "GUEST" && (
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="logout"
          onClick={logout}
        />
      )}
    </Wrapper>
  );
}

export default MiniSidebar;
