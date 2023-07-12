import logo from '@image/logo.svg';
import styled from 'styled-components';
interface AuthFormHeaderProps {
  title: string;
}

function AuthFormHeader({ title }: AuthFormHeaderProps) {
  return (
    <>
      <div>
        <img src={logo} alt="로고" />
        <Title>{title}</Title>
        <SubTitle>티끌모아 태산 만들기, 티모와 함께 성장하세요!</SubTitle>
      </div>
    </>
  );
}

export default AuthFormHeader;

export const Title = styled.h2`
  color: #252525;
  font-family: Noto Sans KR;
  font-size: 30.693px;
  font-style: normal;
  line-height: 49.327px;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  font-family: Noto Sans KR;
  font-size: 14.25px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.019px;
  margin-bottom: 33px;
`;

export const FormHeaderContainer = styled.div`
  display: inline-flex;
  padding: 0px 175.331px 33.981px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8.769px;
`;
