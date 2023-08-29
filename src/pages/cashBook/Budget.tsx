import React, { useState } from 'react';
import LeftSide3 from '@components/LeftSide3';
import styled from 'styled-components';
import { ReactComponent as Add } from '@image/add.svg';
import SetBudgetModal from '@components/Modal/SetBudgetModal';
function Budget() {
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  return (
    <>
      <Container>
        {budgetModalOpen && <SetBudgetModal setBudgetModalOpen={setBudgetModalOpen} />}
        <InnerContainer>
          <LeftSide3 />
          <Main>
            <Header>
              <HeaderItem>
                <TextPrimary>이번 달 지출</TextPrimary>
                <TextSecondary>300원</TextSecondary>
              </HeaderItem>
              <HeaderItem>
                <TextPrimary>이번 달 수입</TextPrimary>
                <TextSecondary>300원</TextSecondary>
              </HeaderItem>
              <HeaderItem>
                <TextPrimary> 예산</TextPrimary>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px' }}>
                    <p>설정하신 예산이 없습니다.</p>
                    <p>계획적인 소비습관을 들여보세요!</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                    <AddBtn onClick={() => setBudgetModalOpen(true)} />
                    <p style={{ marginLeft: '3px', color: 'var(--dark--purple)' }}>예산 설정하기</p>
                  </div>
                </div>
              </HeaderItem>
            </Header>

            <BudgetChart>
              <div style={{ width: '60%', display: 'column' }}>
                <div style={{ marginBottom: '30px' }}>
                  <p style={{ fontSize: '14px', display: 'block', marginBottom: '8px' }}>
                    이번 달 지출
                  </p>
                  <p style={{ fontSize: '18px', fontWeight: '700' }}>99,0000원 남음</p>
                </div>
                <div>
                  <div style={{ marginBottom: '10px' }}>
                    <div
                      style={{
                        width: '80%',
                        backgroundColor: '#F5F5F5',
                        height: '50px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.05) inset',
                      }}
                    ></div>
                  </div>
                  <p>1000원 사용</p>
                </div>

                <div
                  style={{
                    marginTop: '40px',
                    height: '1px',
                    backgroundColor: 'var(--light--purple)',
                    width: '80%',
                    opacity: '50%',
                    marginBottom: '25px',
                  }}
                ></div>
                <div style={{ display: 'flex' }}>
                  <div>
                    <Dot />
                  </div>
                  <div style={{ marginRight: '8px' }}>
                    <BasicFont>6월 예산</BasicFont>
                  </div>
                  <div>
                    <BasicFont>300,000원</BasicFont>
                  </div>
                </div>
                <div style={{ marginTop: '20px', display: 'flex' }}>
                  <div>
                    <Dot />
                  </div>
                  <div style={{ marginRight: '8px' }}>
                    <BasicFont>남은 1월 예산</BasicFont>
                  </div>
                  <div>
                    <BasicFont>99,000</BasicFont>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '40%',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '20px',
                  display: 'flex',
                  padding: '30px',
                }}
              >
                <Dot />
                <div>
                  <BasicFont>지난 달 예산 관리 및 결과</BasicFont>
                </div>
              </div>
            </BudgetChart>
          </Main>
        </InnerContainer>
      </Container>
    </>
  );
}

export default Budget;

const Container = styled.div`
  display: flex;
  margin-top: 150px;
  margin-bottom: 230px;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1280px;
  display: flex;
`;

const Main = styled.main`
  margin-left: 100px;
  /* border: 1px solid blue; */
  width: 1080px;
`;

const Header = styled.header`
  border: 1px solid var(--light--blue);
  border-radius: 10px;
  width: 100%;
  height: 138px;
  display: flex;
`;

const HeaderItem = styled.div`
  width: 33.3%;
  border-right: 1px solid var(--light--blue);
`;

const TextPrimary = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 38px 0 28px 5px;
`;

const TextSecondary = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-left: 5px;
`;

const BudgetChart = styled.div`
  /* border: 1px solid black; */
  margin-top: 90px;
  display: flex;
`;

const Dot = styled.div`
  border-radius: 50%;
  background-color: #d9d9d9;
  width: 10px;
  height: 10px;
  margin-right: 8px;
`;

const BasicFont = styled.p`
  font-size: 14px;
`;

const AddBtn = styled(Add)`
  cursor: pointer;
  margin-right: 5px;
`;
