import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import AuthFormHeader from '@components/AuthForm/AuthFormHeader';
import { DataInput } from '@components/AuthForm/DataInput';
import { Button378 } from '@components/Button/Button378';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSignupClick: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('dd');
    navigate('/signup');
  };

  return (
    <>
      <Container>
        <SignUpForm>
          <AuthFormHeader title="로그인" />
          <div>
            <DataInput label="이메일" type="text" id="email" />
            <DataInput label="비밀번호" type="password" id="password" />
          </div>
          <ButtonContainer>
            <Button378 color="--dark--purple">로그인</Button378>
          </ButtonContainer>
          <QuestionBox>
            <AskIsUser>
              <Pseudo></Pseudo>
              <Question>회원이 아닌가요?</Question>
              <Pseudo></Pseudo>
            </AskIsUser>
          </QuestionBox>
          <Button378 color="--dark--blue" onClick={handleSignupClick}>
            회원가입
          </Button378>
        </SignUpForm>
      </Container>
      ;
    </>
  );
}

export default Login;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpForm = styled.div`
  width: 378px;
  height: 588px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
`;

export const AskIsUser = styled.div`
  /* width: 100%; */
  display: inline-flex;
  align-items: center;
  margin-top: 20.8px;
  position: relative;
`;

export const Pseudo = styled.div`
  width: 140px;
  height: 1px;
  background: #ccc;
`;

export const Question = styled.p`
  color: #666;
  font-weight: 350;
  padding: 0 10px 0 10px;
`;

export const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
