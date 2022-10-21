import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { setModalOpen, setModalClose } from "../../store/slices/modalSlice";

import {
  Wrapper,
  ModalWrapper,
  ModalHeader,
  ModalContents,
  ModalFooter,
} from "./style";

function ManageGroupModal() {
  const dispatch = useDispatch();
  const { user_id } = useParams();

  const [group_id, setGroupId] = useState("");
  const [applicants, setApplicants] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function getGroupInfo() {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_REQUEST_HOST}/users/${user_id}/groups`
      );

      if (res.status === 200) {
        const group = await res.json();

        setGroupId(group.applicants._id);
        setApplicants(group.applicants.applicants);
        setMembers(group.members.members);
      }
    }

    getGroupInfo();
  }, []);

  async function acceptApplicant(e) {
    const applicant_id = e.target.closest("li").dataset.id;
    const applicant_name = e.target.closest("li").dataset.name;

    const res = await fetch(
      `${process.env.REACT_APP_SERVER_REQUEST_HOST}/users/${user_id}/groups/${group_id}/${applicant_id}`,
      {
        method: "POST",
        body: JSON.stringify({
          status: "PARTICIPATING",
        }),
      }
    );

    if (res.status === 200) {
      dispatch(
        setModalOpen({
          type: "message",
          message: `${applicant_name} 수락하였습니다.`,
        })
      );
    } else {
      dispatch(
        setModalOpen({
          type: "message",
          message: "오류가 발생했습니다. 다시 한 번 시도해 주세요.",
        })
      );
    }
  }

  async function rejectApplicant(e) {
    const applicant_id = e.target.closest("li").dataset.id;
    const applicant_name = e.target.closest("li").dataset.name;

    const res = await fetch(
      `${process.env.REACT_APP_SERVER_REQUEST_HOST}/users/${user_id}/groups/${applicant_id}`,
      {
        method: "POST",
        body: JSON.stringify({
          status: "REJECTED",
        }),
      }
    );

    if (res.status === 200) {
      dispatch(
        setModalOpen({
          type: "message",
          message: `${applicant_name}을 거절하였습니다.`,
        })
      );
    } else {
      dispatch(
        setModalOpen({
          type: "message",
          message: "오류가 발생했습니다. 다시 한 번 시도해 주세요.",
        })
      );
    }
  }

  return (
    <Wrapper>
      <ModalWrapper>
        <ModalHeader>
          <h3>그룹관리</h3>
        </ModalHeader>
        <ModalContents>
          <div className="members">
            <strong>Members</strong>
            <div className="contents-wrap">
              <ul className="members-list">
                {members.map((member) => (
                  <li>{member.nickname}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="applicants">
            <strong>Applicants</strong>
            <div className="contents-wrap">
              <ul className="applicants-list">
                {applicants.map((applicant) => (
                  <li data-id={applicant._id} data-name={applicant.nickname}>
                    <span className="name">{applicant.nickname}</span>
                    <div>
                      <button onClick={acceptApplicant}>수락</button>
                      <button onClick={rejectApplicant}>거절</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ModalContents>
        <ModalFooter>
          <button
            className="close-button"
            onClick={() => dispatch(setModalClose())}
          >
            닫기
          </button>
        </ModalFooter>
      </ModalWrapper>
    </Wrapper>
  );
}

export default ManageGroupModal;
