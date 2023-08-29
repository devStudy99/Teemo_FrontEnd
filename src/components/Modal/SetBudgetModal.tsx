import React, { useState } from 'react';
import Modal from '@components/Modal/Modal';
import styled from 'styled-components';
import { Button378 } from '@components/Button/Button378';
import { DataInput } from '@components/AuthForm/DataInput';
import { Divider } from 'antd';
function SetBudgetModal({ setBudgetModalOpen }: any) {
  return (
    <>
      <Modal
        closeModal={() => {
          setBudgetModalOpen(false);
        }}
        width={45}
      >
        <Container>
          <Main>
            <header>
              <Title>7월 예산 설정</Title>
              <SubTitle>예산 설정은 수정이 불가하니 신중히 계획을 세워주세요!</SubTitle>
            </header>
            <div style={{ marginTop: '20px' }}>
              <DataInput label="금액" type="number" id="budget" />
              <Button378 bgcolor="--light--blue" color="--dark--purple">
                예산등록
              </Button378>
            </div>
          </Main>
        </Container>
      </Modal>
    </>
  );
}

export default SetBudgetModal;

const Container = styled.div`
  width: 100%;
  padding: 30px;
  height: 25rem;
`;

const Main = styled.div`
  padding: 30px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.p`
  opacity: 50%;
  margin-top: 8px;
`;
