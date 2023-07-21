import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  background: #ecf2ff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentItemWrapper = styled.div`
  display: flex;
  color: #cca6f4;
  font-size: 18px;
  gap: 20px;
`;

export const ContentItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const LoginButton = styled.div`
  border-radius: 12px;
  background: #e5d1fa;
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;
