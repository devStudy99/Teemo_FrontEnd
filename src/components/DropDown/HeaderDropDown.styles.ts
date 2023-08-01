import styled from 'styled-components';

export const DropDownWrapper = styled.div`
  position: relative;
`;

export const DropDownContentWrapper = styled.div`
  position: absolute;
  right: -75px;
  top: 50px;
  background: #ffffff;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #cca6f4;
  border-radius: 10px;
  color: #cca6f4;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const DropDownDivider = styled.div`
  width: 80%;
  height: 1px;
  background: #cca6f4;
`;
