import styled from 'styled-components';
import AuthFormHeader from '@components/AuthForm/AuthFormHeader';
import { DataInput } from '@components/AuthForm/DataInput';
import { Button378 } from '@components/Button/Button378';

function SignUp() {
  return (
    <>
      <Container>
        <SignUpForm>
          <AuthFormHeader title="회원가입" />
          <div>
            <DataInput label="이메일" type="text" id="id" />
            <DataInput label="닉네임" type="text" id="nickname" />
            <DataInput label="비밀번호" type="password" id="password" />
            <DataInput label="비밀번호 확인" type="password" id="password" />
          </div>
          <ButtonContainer>
            <Button378 color="--light--purple">가입하기</Button378>
          </ButtonContainer>
        </SignUpForm>
      </Container>
      ;
    </>
  );
}

export default SignUp;

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
