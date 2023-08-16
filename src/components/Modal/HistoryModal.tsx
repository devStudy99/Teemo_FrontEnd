import React, { useState } from 'react';
import Modal from '@components/Modal/Modal';
import { formatDateToMonthDay } from '@utils/dateUtils';
import styled from 'styled-components';
import menuList from './menu';
function HistoryModal({ date, setHistoryModalOpen }: any) {
  const data = [
    {
      분류: '지출',
      날짜: '2023-03-01',
      카테고리: '문화생활',
      금액: '102032',
      메모: '영화 범죄도시',
    },
    {
      분류: '지출',
      날짜: '2023-03-02',
      카테고리: '문화생활',
      금액: '102032',
      메모: '영화 범죄도시',
    },
  ];
  return (
    <>
      <Modal
        closeModal={() => {
          setHistoryModalOpen(false);
        }}
        width={90}
      >
        <Container>
          <DateTitle>{`${formatDateToMonthDay(date).toString()} 가계부 내역`}</DateTitle>
          <ModalMid>
            <p>
              총 <span>0 원</span>
            </p>
            <EditBtn>내역 수정하러 가기</EditBtn>
          </ModalMid>
          <Menus>
            {menuList.map((menu) => (
              <Menu key={menu.title} size={menu.size}>
                {menu.title}
              </Menu>
            ))}
          </Menus>
          <div style={{ width: '100%' }}>
            {data.map((data, index) => (
              <div key={`wrapper=${index}`} style={{ display: 'flex', flexDirection: 'column' }}>
                <Wrapper key={`data-${index}`}>
                  <div>
                    <input type="checkbox" />
                  </div>
                  <Box>{data.분류}</Box>
                  <Box>{data.날짜}</Box>
                  <Box>{data.카테고리}</Box>
                  <Box>{data.금액}</Box>
                  <Box>{data.메모}</Box>
                </Wrapper>
              </div>
            ))}
          </div>
        </Container>
      </Modal>
    </>
  );
}

export default HistoryModal;

const Container = styled.div`
  width: 100%;
  padding: 3rem;
  height: 35rem;
`;

const DateTitle = styled.h2`
  text-justify: start;
  font-weight: 700;
  padding: 1.2rem;
  font-size: 20px;
`;

const ModalMid = styled.div`
  display: flex;
  padding: 1.2rem;
  justify-content: space-between;
  border-bottom: 1px solid rgb(233, 233, 238);
  p {
    font-size: 1.8rem;
    padding: 2rem 0px;
  }
  span {
    font-weight: 700;
  }
`;

const Menu = styled.div<{ size: number }>`
  ${({ size }) => `
      width: ${size}rem;
`}
  font-size: 1.4rem;
  padding: 1.2rem;
`;

const Menus = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
`;

const EditBtn = styled.button`
  border: 0.1rem solid rgb(119, 152, 252);
  border-radius: 20rem;
  background-color: white;
  padding: 0.3rem 1.5rem;
  color: rgb(119, 152, 252);
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 4.5rem;
  justify-content: space-evenly;
  font-size: 1.3rem;
  width: 100%;
  div {
    overflow: hidden;
    word-wrap: break-word;
  }
`;

// const Box = styled.div<{ width: number }>`
//   ${({ width }) => `
//        width: ${width}rem;
// `}
//   display: flex;
//   text-align: center;
// `;

const Box = styled.div`
  display: flex;
  text-align: center;
`;

// const IsIncome = styled.div<{ isIncome: boolean }>`
//   ${({ isIncome }) => `
//   background-color: ${isIncome ? red : green};
//   `}
// `;
