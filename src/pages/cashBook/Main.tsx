import React from 'react';
import styled from 'styled-components';
import Calendar from '@components/Calendar/index';
function Main() {
  return (
    <Container>
      <div>메뉴바</div>
      <div>
        <Menu>
          <span>캘린더</span>
        </Menu>
        <Calendar />
      </div>
      <div>작성바</div>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  height: 100vh;
  margin-top: 150px;
  display: flex;
`;

export const Menu = styled.div`
  margin-bottom: 35px;
  span {
    font-size: 20px;
    font-weight: 600;
    border-bottom: 3px solid var(--dark--purple);
    padding: 5px;
  }
`;
