import React from 'react';
import LeftSide3 from '@components/LeftSide3';
import styled from 'styled-components';
function Budget() {
  return (
    <>
      <Container>
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
                <TextPrimary>이번 달 예산</TextPrimary>
                <TextSecondary>300원</TextSecondary>
              </HeaderItem>
            </Header>

            <BudgetChart>
              <div style={{ width: '60%', display: 'column' }}>
                <div style={{ marginBottom: '30px' }}>
                  <p style={{ fontSize: '16px', display: 'block', marginBottom: '8px' }}>
                    이번 달 지출
                  </p>
                  <p style={{ fontSize: '18px', fontWeight: '700' }}>99,0000원 남음</p>
                </div>
                <div>
                  <div style={{ marginBottom: '10px' }}>차트 들어가는 자리</div>
                  <p>1000원 사용</p>
                </div>
                <div style={{ marginTop: '45px', borderTop: '1px solid var(--light--blue)' }}>
                  <div style={{ marginTop: '32px' }}>
                    <p>6월 예산</p>
                    <p>남은 1월 예산</p>
                  </div>
                </div>
              </div>
              <div style={{ width: '40%', backgroundColor: 'lightgrey' }}>
                <div>
                  <p>지난 달 예산 관리 및 결과</p>
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
  border: 1px solid blue;
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
  width: 33%;
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
  border: 1px solid black;
  margin-top: 90px;
  display: flex;
`;
