import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 400px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.5);

  & .title {
    padding-top: 20px;
    font-size: 2em;
    color: #a3bded;
  }

  & .layout-period {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  & .layout-text {
    display: flex;
    margin-top: 20px;
  }

  & .layout-button {
    display: flex;
  }

  & .date-hyphen {
    margin-left: 5px;
    margin-right: 5px;
  }

  & .period {
    font-size: 20px;
    margin-right: 10px;
  }

  & .notice-title {
    font-size: 20px;
    margin-right: 10px;
  }

  & .notice {
    width: 305px;
    height: 140px;
    font-size: 18px;
  }

  & .error-message {
    display: flex;
    align-items: center;
    height: 50px;
    color: #7fc6d7;
  }

  & .close-button {
    display: block;
    width: 80px;
    background: #a3bded;
    margin-left: 30px;
    margin-right: 30px;
    padding: 10px;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-family: "GangwonEdu_OTFBoldA";
  }
`;
