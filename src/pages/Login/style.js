import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;

  & > header {
    font-size: 20px;
    padding: 20px;
    color: #a3bded;
  }

  & > header > svg {
    cursor: pointer;
  }
`;

export const LoginForm = styled.form`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #414141;

  & h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  & input {
    display: block;
    width: 300px;
    height: 40px;
    margin: 0 auto 20px;
    padding-left: 10px;
    border-radius: 10px;
    border: 3px solid #a3bded;
  }

  & .validation-message {
    height: 30px;
    text-align: center;
    font-size: 14px;
    color: #ff2700;
  }

  & .login-button {
    display: block;
    width: 80px;
    text-align: center;
    margin: 10px auto 0;
    background: #a3bded;
    padding: 10px;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    font-family: "GangwonEdu_OTFBoldA";
  }

  & .login-button:disabled {
    background: #f3f3f3;
    border: 3px solid #f3f3f3;
    color: #000000;
  }

  & .login-button:hover {
    border: #a3bded;
    background: #a3bded;
    color: #ffffff;
    font-weight: bold;
  }
`;

export const Header = styled.div`
  height: 60px;
  background: pink;
  display: flex;
  flex-direction: row-reverse;
`;

export const Content = styled.div`
  height: calc(100vh - 50px);
  position: relative;
`;

export const UserTypeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 750px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const User = styled.div`
  width: 300px;
  background: yellowgreen;
`;
