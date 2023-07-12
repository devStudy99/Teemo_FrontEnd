import React from 'react';
import styled from 'styled-components';

interface DataInputProps {
  label: string;
  type: string;
  id: string;
  // value: string;
  // error: boolean;
  // errorMessage: string;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DataInput: React.FC<DataInputProps> = ({
  label,
  type,
  id,
  // value,
  // error,
  // errorMessage,
  // onChange,
}) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input type={type} id={id} />
      {/* <div className={styles.error}>{error && errorMessage}</div> */}
    </InputContainer>
  );
};

export { DataInput };

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
`;

export const Input = styled.input`
  width: 100%;
  height: 49.327px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
  margin-bottom: 16px;
  padding: 0;
`;
