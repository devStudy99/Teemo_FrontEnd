import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import logo from '@image/logo.svg';
import { ButtonRound150 } from '@components/Button/ButtonRound150';
import capture from '@image/capture.svg';
import { useNavigate } from 'react-router-dom';
import circle from '@image/circleYellow.svg';
import ecplise1 from '@image/eclipse1.svg';
import ecplise2 from '@image/eclipse2.svg';
function Welcome() {
  const navigate = useNavigate();

  const goToPage = (path: string): MouseEventHandler<HTMLButtonElement> => {
    return () => {
      navigate(path);
    };
  };
  return (
    <>
      <Container>
        <Section>
          <HeadSection>
            <SubTitle>
              티끌모아 <br />
              태산모으기
            </SubTitle>
            <LogoBox>
              <img src={logo} alt="페이지 로고" />
            </LogoBox>
            <ButtonContainer>
              <ButtonRound150 color="--light--white" onClick={goToPage('/signup')}>
                회원가입
              </ButtonRound150>
              <ButtonRound150 color="--light--blue" onClick={goToPage('/login')}>
                로그인
              </ButtonRound150>
            </ButtonContainer>
          </HeadSection>
          <MainSection>
            <Chapter>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '100px' }}>
                <ChapterTitle>chapter01</ChapterTitle>
                <Title>기록하기</Title>
                <Description>더욱 효율적이고, 경제적인 돈 관리를 원하시나요?</Description>
                <Description>나의 하루 소비생활을 기록해보세요!</Description>
              </div>
              <div>
                <img src={capture} alt="캡쳐이미지" width={'500px'} />
              </div>
            </Chapter>
            <Chapter>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: '100px',
                  marginTop: '100px',
                }}
              >
                <ChapterTitle>chapter02</ChapterTitle>
                <Title>커뮤니티</Title>
                <Description>나의 소비생활을 점검하고</Description>
                <Description>나의 고민을 다른 사람과 나눠보아요!</Description>
              </div>
              {/* <div>
                <img src={capture} alt="캡쳐이미지" />
              </div> */}
            </Chapter>
            <Chapter>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '100px' }}>
                <ChapterTitle>chapter03</ChapterTitle>
                <Title>티모피드</Title>
                <Description>나에게 딱 맞는 금융정보</Description>
                <Description>티모피드에서 다양한 금융소식을 접해보세요!</Description>
              </div>
              {/* <div>
                <img src={capture} alt="캡쳐이미지" />
              </div> */}
              <img
                src={circle}
                alt="캡쳐이미지"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '250px',
                  zIndex: '-1',
                  opacity: '50%',
                }}
              />
              <img
                src={ecplise1}
                alt="캡쳐이미지"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0px',
                  zIndex: '-1',
                  opacity: '50%',
                }}
              />
              <img
                src={ecplise2}
                alt="캡쳐이미지"
                style={{
                  position: 'absolute',
                  top: '100px',
                  left: '-60px',
                  zIndex: '-1',
                  opacity: '30%',
                }}
              />
            </Chapter>
          </MainSection>
        </Section>
        <BottonSection>
          <StartTitle>지금 바로 시작하고 싶다면?</StartTitle>
          <ButtonRound150 color="--dark--black">시작하기</ButtonRound150>
        </BottonSection>
      </Container>
    </>
  );
}

export default Welcome;

export const Container = styled.div`
  width: 100%;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray500};
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 15px;
  word-break: keep-all;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 480px;
`;

export const HeadSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 100px;
  button + button {
    margin-left: 20px;
  }
`;

export const MainSection = styled.div``;

export const Chapter = styled.div`
  display: flex;
`;

export const BottonSection = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light--blue);
`;

export const ChapterTitle = styled.p`
  color: var(--light--purple);
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  opacity: 0.5;
`;

export const Title = styled.p`
  color: var(--dark--purple);
  font-size: 30px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 30px;
`;

export const StartTitle = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const LogoBox = styled.div`
  img {
    width: 300px;
    height: 100px;
    margin-bottom: 90px;
  }
`;
