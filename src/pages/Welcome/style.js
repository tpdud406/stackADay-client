import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: rgba(239, 239, 239);
`;

export const Header = styled.div`
  height: 60px;
  background: #ffffff;
  display: flex;
  flex-direction: row-reverse;

  & button {
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(162, 0, 240), rgba(78, 28, 183));
    margin: 10px 20px;
    padding: 0 20px;
    height: 40px;
    cursor: pointer;
    color: #ffffff;
    transition: all 1s;
  }

  & button:hover {
    background: linear-gradient(135deg, rgba(78, 28, 183), rgba(162, 0, 240));
  }
`;

export const Content = styled.div`
  height: calc(100vh - 50px);
  position: relative;
`;

export const UserTypeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 750px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

export const User = styled.div`
  width: 300px;
  height: 400px;
  line-height: 400px;
  border-radius: 20px;
  text-align: center;
  color: #ffffff;
  font-size: 40px;
  cursor: pointer;
  background: linear-gradient(135deg, rgba(78, 28, 183), rgba(162, 0, 240));
`;
