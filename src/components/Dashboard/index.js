import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  background: #f5f5dc;
  background-size: 40px 40px;
  background-image: linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px);
`;

function Dashboard() {
  return <Wrapper>Dashboard</Wrapper>;
}

export default Dashboard;
