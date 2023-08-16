import React from 'react';
import styled from 'styled-components';
import Calendar from '@components/Calendar/index';
import LeftSide3 from '@components/LeftSide3';
import DailyWriteSheet from '@components/Calendar/DailyWriteSheet';
function Main() {
  return (
    <Container>
      <LeftSide3 />

      <div style={{ marginLeft: '100px' }}>
        <Menu>
          <span>캘린더</span>
        </Menu>
        <Calendar />
      </div>
      <DailyWriteSheet />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  height: 100vh;
  margin: 150px 0px 230px 220px;
  display: flex;
  /* margin-bottom: 230px; */
  /* justify-content: center; */
`;

export const Menu = styled.div`
  margin-bottom: 35px;
  width: 60%;
  span {
    font-size: 20px;
    font-weight: 600;
    border-bottom: 3px solid var(--dark--purple);
    padding: 5px;
  }
`;

export const WriteModal = styled.div`
  /* margin-left: 100px; */
  width: 40%;
`;
