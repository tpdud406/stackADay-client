import styled from "styled-components";
import Sidebar from "../Sidebar";
import Main from "../Main";

const Wrapper = styled.div`
  display: flex;
`;

function Layout() {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  );
}

export default Layout;
