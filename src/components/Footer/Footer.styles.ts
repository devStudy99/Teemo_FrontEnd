import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  background: #f6f6f6;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 1280px;
`;

export const TopSection = styled.div`
  display: flex;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  padding: 30px 0px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavLinkDivider = styled.div`
  width: 1px;
  height: 100%;
  background: #ccc;
`;

export const MiddleSection = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;

export const InfoColumn = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;

export const InfoText = styled.p`
  font-size: 12px;
  line-height: 1.5;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const Copyright = styled.p`
  padding: 20px 0;
  font-size: 12px;
  color: #666666;
`;
