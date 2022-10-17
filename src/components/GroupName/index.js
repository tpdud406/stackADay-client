import { useState } from "react";

function GroupName({ handleGroupName }) {
  const [groupName, setGroupName] = useState("");

  const handleInputs = (e) => {
    setGroupName(e.target.value);
    handleGroupName(groupName);
  };

  return (
    <div>
      <input
        placeholder="그룹명"
        type="text"
        name="groupName"
        value={groupName}
        onChange={handleInputs}
      />
      <button>중복확인</button>
    </div>
  );
}

export default GroupName;
