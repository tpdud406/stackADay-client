import { Wrapper } from "./style";
import { useDispatch } from "react-redux";
import { setModalOpen, setModalClose } from "../../store/slices/modalSlice";

function ConfirmMessageModal({ socket, notice, message }) {
  const dispatch = useDispatch();

  const submitNotice = (e) => {
    e.preventDefault();

    socket?.emit("sendNotice", { notice });
    dispatch(setModalOpen({ type: "message", message: "공지가 생성되었습니다." }));
  };

  return (
    <Wrapper>
      <div className="message">{message}</div>
      <div className="layout">
        <input
          type="submit"
          value="취소"
          className="button"
          onClick={() => dispatch(setModalClose())}
        />
        <input
          type="submit"
          value="확인"
          className="button"
          onClick={submitNotice}
        />
      </div>
    </Wrapper>
  );
}

export default ConfirmMessageModal;
