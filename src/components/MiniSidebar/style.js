import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 100vh;
  width: 50px;
  background: #a3bded;
  text-align: center;
  box-sizing: border-box;

  .bars {
    margin-top: 10px;
    height: 40px;
    color: #ffffff;
  }

  .logout {
    margin-bottom: 10px;
    height: 30px;
    cursor: pointer;
    color: #ffffff;
  }
`;
