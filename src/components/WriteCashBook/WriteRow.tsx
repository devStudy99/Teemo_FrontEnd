import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Cancel } from '@image/close.svg';

interface WriteRowProps {
  rowKey: number;
  onRemove: (rowKeyToRemove: number) => void;
}

function WriteRow({ rowKey, onRemove }: WriteRowProps) {
  const handleRemoveClick = () => {
    onRemove(rowKey);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        justifyContent: 'center',
      }}
    >
      <StyledSelector>
        <select name="" id="isIncome">
          <option value="">선택</option>
          <option value="expense">지출</option>
          <option value="income">수입</option>
        </select>
      </StyledSelector>
      <div>
        <StyledInputDate type="date" />
      </div>

      <StyledSelector>
        <select name="category" id="category">
          <option>선택</option>
          <option value="food">식비</option>
          <option value="cafe">카페/간식</option>
          <option value="living">생활</option>
          <option value="shopping">쇼핑</option>
          <option value="etc">기타</option>
        </select>
      </StyledSelector>

      <div>
        <PriceInput
          type="number"
          onKeyDown={(e: any) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
        />
      </div>
      <StyledInput>
        <input type="text" id="merchant" />
      </StyledInput>
      <StyledInput>
        <input type="text" id="memo" />
      </StyledInput>

      <div>
        <RemoveBtn onClick={handleRemoveClick} />
      </div>
    </div>
  );
}

export default WriteRow;
const StyledSelector = styled.div`
  select {
    border: none;
    border-bottom: 1px solid var(--dark--purple);
    padding: 3px;
  }
`;

const StyledInput = styled.div`
  input {
    border: none;
    border-bottom: 1px solid var(--dark--purple);
    padding: 3px;
  }
`;

const PriceInput = styled.input`
  cursor: pointer;

  /* color: transparent; */
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--dark--purple);
  padding: 3px;
`;

const RemoveBtn = styled(Cancel)`
  cursor: pointer;
`;

const StyledInputDate = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid var(--dark--purple);
  padding: 3px;
`;
