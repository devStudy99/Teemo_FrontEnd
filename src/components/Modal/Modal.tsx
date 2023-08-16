import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '@image/close.svg';

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
  width?: number;
}

function Modal({ children, closeModal, width = 50 }: ModalProps) {
  return (
    <ModalBackground onClick={closeModal}>
      <ModalBox
        width={width}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
      >
        {children}
        <Button onClick={closeModal} />
      </ModalBox>
    </ModalBackground>
  );
}

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
`;

const ModalBox = styled.div<{ width: number }>`
  ${({ width }) => `
    width: ${width && width}rem;
  `}
  position: fixed;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(Close)`
  position: absolute;
  right: 3rem;
  top: 2rem;
  cursor: pointer;
`;
