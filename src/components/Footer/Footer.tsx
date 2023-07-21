import {
  BottomSection,
  ContentWrapper,
  Copyright,
  FooterWrapper,
  InfoColumn,
  InfoText,
  LogoWrapper,
  MiddleSection,
  NavLink,
  NavLinkDivider,
  NavLinksWrapper,
  Title,
  TopSection,
} from '@components/Footer/Footer.styles';
import { ReactComponent as Logo } from '@image/logo.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const reload = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <FooterWrapper>
      <ContentWrapper>
        <TopSection>
          <LogoWrapper>
            <Logo style={{ cursor: 'pointer' }} onClick={reload} />
            <NavLinksWrapper>
              <NavLink to="/개인정보처리방침">개인정보처리방침</NavLink>
              <NavLinkDivider />
              <NavLink to="/이용약관">이용약관</NavLink>
              <NavLinkDivider />
              <NavLink to="/이용안내">이용안내</NavLink>
            </NavLinksWrapper>
          </LogoWrapper>
        </TopSection>
        <MiddleSection>
          <InfoColumn>
            <Title>CUSTOMER CENTER</Title>
            <InfoText>02-1234-5678</InfoText>
          </InfoColumn>
          <InfoColumn>
            <Title>OPERATING HOURS</Title>
            <InfoText>
              MON - FRI AM 09:30 - PM 05:30
              <br />
              LUNCH PM 12:00 - 1:00
              <br />
              SAT, SUN, HOLIDAY OFF
            </InfoText>
          </InfoColumn>
          <InfoColumn>
            <Title>ACCOUNT INFO</Title>
            <InfoText>
              신한은행 12345678900
              <br />
              예금주 (주) TEEMO(티모)
            </InfoText>
          </InfoColumn>
          <InfoColumn>
            <Title>COMPANY INFO</Title>
            <InfoText>
              회사 : (주) TEEMO(티모)
              <br />
              팀장 : 정혜린
              <br />
              팀원 : 김승현, 임규진
              <br />
              사업자등록번호 : [123-12-12345]
              <br />
              주소 : (01234) ????
              <br />
              제휴문의 : ?? / contact@??.io
            </InfoText>
          </InfoColumn>
        </MiddleSection>
        <BottomSection>
          <Copyright>Copyright ⓒ 2023 - 2023 TEEMO Inc. All Rights Reserved</Copyright>
        </BottomSection>
      </ContentWrapper>
    </FooterWrapper>
  );
};
export default Footer;
