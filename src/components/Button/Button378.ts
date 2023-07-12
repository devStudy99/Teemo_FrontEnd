import styled from 'styled-components';

interface ButtonProps {
  color: string;
}

export const Button378 = styled.button<ButtonProps>`
  width: 100%;
  height: 49.327px;
  align-items: flex-start;
  border-radius: 5.481px;
  border: none;
  opacity: 0.6;
  color: #fff;
  font-size: 16.442px;
  font-weight: 500;
  cursor: pointer;
  background-color: var(${({ color }) => color});

  &:hover {
    opacity: 0.9;
  }
`;
