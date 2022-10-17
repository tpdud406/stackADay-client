import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: #c9ccd5;
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
