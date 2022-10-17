import styled from "styled-components";
import CalendarDate from "../CalendarDate";
import Dashboard from "../Dashboard";

const Wrapper = styled.div`
  width: 100%;
  background: #fefefe;
`;

function Main() {
  return (
    <Wrapper>
      <CalendarDate />
      <Dashboard />
    </Wrapper>
  );
}

export default Main;
