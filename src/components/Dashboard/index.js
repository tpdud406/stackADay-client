import { Wrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setModalOpen } from "../../store/slices/modalSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const [cards, setCards] = useState(null);
  const { user_id } = useParams();
  const { currentDate } = useSelector((state) => state.calendar);

  useEffect(() => {
    async function getUserCards() {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_REQUEST_HOST}/users/${user_id}/cards?date=${currentDate}`
      );

      if (res.status === 200) {
        const { cards } = await res.json();
        setCards(cards);
      }
    }

    user_id && getUserCards();
  });

  return (
    <Wrapper>
      <FontAwesomeIcon
        icon={faCirclePlus}
        className="plus-icon"
        onClick={() =>
          dispatch(setModalOpen({ type: "createCard", message: "" }))
        }
      />
    </Wrapper>
  );
}

export default Dashboard;
