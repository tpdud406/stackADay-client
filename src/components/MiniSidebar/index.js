import { Wrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function MiniSidebar({ setIsOpen, role }) {
  const navigate = useNavigate();

  async function logout() {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_REQUEST_HOST}/logout`,
      {
        method: "POST",
      }
    );

    if (res.status === 200) {
      navigate(`/welcome`);
    }
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
