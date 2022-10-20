import { Wrapper } from "./style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModalOpen, setModalClose } from "../../store/slices/modalSlice";
import { validateNoticeForm } from "../../utils/validateNoticeForm";

function NoticeModal({ message }) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [notice, setNotice] = useState({
    startDate: "",
    endDate: "",
    groupNotice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNotice({
      ...notice,
      [name]: value,
    });
  };

  const submitNotice = (e) => {
    e.preventDefault();
    const errors = validateNoticeForm(notice);

    if (errors.length > 0) {
      const { message } = errors[0];
      return setErrorMessage(message);
    }

    // socket 연결 로직 작성
    dispatch(
      setModalOpen({ type: "message", message: "공지가 생성되었습니다." })
    );
  };

  return (
    <Wrapper>
      <div className="title">그룹 메시지</div>
      <div className="layout-period">
        <div className="period">기간</div>
        <input type="date" name="startDate" onChange={handleChange} />
        <div className="date-hyphen">-</div>
        <input type="date" name="endDate" onChange={handleChange} />
      </div>
      <div className="layout-text">
        <div className="notice-title">내용</div>
        <textarea className="notice" name="groupNotice" onChange={handleChange}>
          {message}
        </textarea>
      </div>
      <div className="error-message">{errorMessage}</div>
      <div className="layout-button">
        <input
          type="submit"
          value="취소"
          className="close-button"
          onClick={() => dispatch(setModalClose())}
        />
        <input
          type="submit"
          value="전송"
          className="close-button"
          onClick={submitNotice}
        />
      </div>
    </Wrapper>
  );
}

export default NoticeModal;
