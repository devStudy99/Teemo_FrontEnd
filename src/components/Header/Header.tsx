import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ContentItem,
  ContentItemWrapper,
  ContentWrapper,
  HeaderWrapper,
  LoginButton,
} from '@components/Header/Header.styles';
import HeaderDropDown from '@components/DropDown/HeaderDropDown';
import { ReactComponent as Logo } from '@image/logo.svg';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const reload = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <HeaderWrapper>
      <ContentWrapper>
        <Logo style={{ cursor: 'pointer' }} onClick={reload} />
        <ContentItemWrapper>
          <ContentItem>
            <Link to="/service">서비스소개</Link>
          </ContentItem>
          {isLoggedIn ? (
            <>
              <ContentItem>
                <Link to="/가계부">가계부</Link>
              </ContentItem>
              <ContentItem>
                <Link to="/community">커뮤니티</Link>
              </ContentItem>
              <HeaderDropDown />
            </>
          ) : (
            <LoginButton>
              <Link to="/login">로그인</Link>
            </LoginButton>
          )}
        </ContentItemWrapper>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
