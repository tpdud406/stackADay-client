import styled from "styled-components";

const Wrapper = styled.header`
  background-color: #c9ccd5;
`;

const Header = styled.div`
  height: 60px;
  background: pink;
  display: flex;
  flex-direction: row-reverse;
`;

const Content = styled.div`
  height: calc(100vh - 50px);
  position: relative;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 750px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Card = styled.div`
  width: 300px;
  background: yellowgreen;
`;

function Main() {
  return (
    <Wrapper>
      <Header>
        <button>회원가입</button>
      </Header>
      <Content>
        <CardWrapper>
          <Card>Guest</Card>
          <Card>Users</Card>
        </CardWrapper>
      </Content>
    </Wrapper>
  );
}

export default Main;
