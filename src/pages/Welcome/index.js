import { Wrapper, Header, Content, UserTypeWrapper, User } from "./style";

function Welcome() {
  return (
    <Wrapper>
      <Header>
        <button>회원가입</button>
      </Header>
      <Content>
        <UserTypeWrapper>
          <User>Guest</User>
          <User>Users</User>
        </UserTypeWrapper>
      </Content>
    </Wrapper>
  );
}

export default Welcome;
