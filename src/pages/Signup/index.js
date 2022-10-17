import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import GroupName from "../../components/GroupName";

function Signup() {
  const [signupValues, setSignupValues] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [selectedRole, setSelectedRole] = useState("member");
  const [groupName, setGroupName] = useState("");
  const [hover, setHover] = useState(false);

  const { nickname, email, password, passwordConfirm } = signupValues;

  const onHover = () => {
    setHover(!hover);
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setSignupValues({
      ...signupValues,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    const result = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nickname,
        email,
        password,
        selectedRole,
        groupName,
      }),
    });

    setSignupValues(result);
  };

  useEffect(() => {
    onSubmit();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleGroupName = (group) => {
    setGroupName(group);
  };

  const handleRole = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div>
      <button>{"<"}</button>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          value={nickname}
          onChange={handleInputs}
        />
        <div>
          <input
            type="email"
            placeholder="이메일"
            name="email"
            value={email}
            onChange={handleInputs}
          />
          <button>중복확인</button>
        </div>
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={handleInputs}
        />
        <p>숫자, 영문자 포함 8자 이상이어야 합니다.</p>
        <input
          type="password"
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleInputs}
        />
        <div>
          권한
          <FontAwesomeIcon
            onMouseOver={onHover}
            onMouseLeave={onHover}
            icon={faInfoCircle}
          />
          <div>
            <label htmlFor="member" />
            <input
              id="member"
              type="radio"
              value="member"
              name="role"
              checked={selectedRole === "member"}
              onChange={handleRole}
            />
            member
          </div>
          <div>
            <label htmlFor="admin" />
            <input
              id="admin"
              type="radio"
              value="admin"
              name="role"
              checked={selectedRole === "admin"}
              onChange={handleRole}
            />
            admin
          </div>
        </div>
        <button>제출</button>
      </form>
      {hover && (
        <div>
          <p>
            * member는 복수의 그룹에 참여할 수 있습니다.
            <br />* admin은 하나의 그룹을 생성하고, 관리할 수 있습니다.
          </p>
        </div>
      )}
      {selectedRole === "admin" && (
        <GroupName groupName={groupName} handleGroupName={handleGroupName} />
      )}
    </div>
  );
}

export default Signup;
