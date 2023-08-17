import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Cancel } from '@image/close.svg';

function WriteRow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <select name="" id="isIncome">
          <option value="">선택</option>
          <option value="expense">지출</option>
          <option value="income">수입</option>
        </select>
      </div>
      <div>
        <input type="date" />
      </div>

      <StyledSelector style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <select name="category" id="category">
          <option>선택</option>
          <option value="food">식비</option>
          <option value="cafe">카페/간식</option>
          <option value="living">생활</option>
          <option value="shopping">쇼핑</option>
          <option value="etc">기타</option>
        </select>
      </StyledSelector>

      <StyledInput style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <input type="text" id="merchant" />
      </StyledInput>
      <PriceInput
        type="number"
        onKeyDown={(e: any) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
      />
      <StyledInput style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <input type="text" id="memo" />
      </StyledInput>

      <div>{/* <CancelBtn/> */}</div>
    </div>
  );
}

export default WriteRow;
const StyledSelector = styled.div`
  select {
    /* width: 50%; */
    margin-left: 10px;
    border: none;
  }
`;

const StyledInput = styled.div`
  input {
    border: none;
    border-bottom: 1px solid black;
  }
`;

const PriceInput = styled.input`
  cursor: pointer;
  /* width: 40%; */
  /* color: transparent; */
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
`;

const CancelBtn = styled(Cancel)`
  cursor: pointer;
`;
