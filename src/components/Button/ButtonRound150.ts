import styled from 'styled-components';

interface ButtonProps {
  color: string;
}

export const ButtonRound150 = styled.button<ButtonProps>`
  width: 150px;
  height: 50px;
  border-radius: 30px;
  border: none;
  color: var(--dark--purple);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: var(${({ color }) => color});
  border: 2px solid var(--light--purple);
`;
