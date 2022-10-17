import { Wrapper } from "./style";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

function Layout() {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  );
}

export default Layout;
