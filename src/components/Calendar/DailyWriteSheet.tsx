import { theme } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '@image/close.svg';
import { ReactComponent as Pencil } from '@image/pencil.svg';
function DailyWriteSheet() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const shouldHidePlaceholder = isFocused || inputValue !== '';
  return (
    <Container>
      <FormHeader>
        <Button />
        <Title style={{ fontWeight: '500' }}>7월 3일 가계부 작성</Title>
        <div style={{ display: 'flex', position: 'relative' }}>
          <PriceInput
            type="number"
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)} // onFocus 이벤트 핸들러 추가
            onBlur={() => setIsFocused(false)} // onBlur 이벤트 핸들러 추가
            onKeyDown={(e: any) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
          />
          <InputPlaceholder isHidden={shouldHidePlaceholder}>
            <p style={{ fontSize: '18px' }}>0원</p>
            <Pencil />
          </InputPlaceholder>
        </div>
        <InputLabel>금액을 입력해주세요</InputLabel>
      </FormHeader>
      <FormMid>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <p>분류</p>
          <StyledRadio>
            <input type="radio" checked id="expense" />
            <label htmlFor="expense">지출</label>
          </StyledRadio>
          <StyledRadio>
            <input type="radio" id="income" />
            <label htmlFor="income">수입</label>
          </StyledRadio>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <p>카테고리</p>
          <select name="category" id="category">
            <option value="food">식비</option>
            <option value="cafe">카페/간식</option>
            <option value="living">생활</option>
            <option value="shopping">쇼핑</option>
            <option value="etc">기타</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <label htmlFor="merchant">소비처</label>
          <input type="text" id="merchant" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <label htmlFor="memo">메모</label>
          <input type="text" id="memo" />
        </div>
      </FormMid>
      <FinishBtn>작성완료</FinishBtn>
    </Container>
  );
}

export default DailyWriteSheet;

const Container = styled.div`
  width: 256px;
  height: 373px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  margin-left: 90px;
  margin-top: 50px;
`;

const FormHeader = styled.div`
  margin-top: 42px;
  margin-left: 39px;
  position: relative;
`;

const FormMid = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 15px;
`;

const Button = styled(Close)`
  position: absolute;
  right: 25px;
  top: -15px;
  cursor: pointer;
`;

const Title = styled.p`
  color: rgb(98, 98, 115);
  padding-bottom: 1rem;
  font-weight: 500;
  font-size: 12px;
`;

const PriceInput = styled.input`
  cursor: pointer;
  width: 40%;
  /* color: transparent; */
  background-color: transparent;
  font-size: 2rem;
  font-weight: 700;
  border: none;
  outline: none;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    /* margin: 0; */
  }
`;

const InputLabel = styled.p`
  color: var(--dark--purple);
  padding-top: 4px;
`;

interface PlaceholderWrapperProps {
  isHidden: boolean;
}

const InputPlaceholder = styled.div<PlaceholderWrapperProps>`
  display: ${(props) => (props.isHidden ? 'none' : 'flex')};
  position: absolute;
  top: 5px;
  z-index: -10;
  p {
    font-weight: 600;
    opacity: 0.6;
  }
`;

const FinishBtn = styled.button`
  width: 167px;
  height: 30px;
  font-weight: 600;
  margin-left: 39px;
  background-color: var(--light--blue);
  color: var(--dark--purple);
  border-radius: 5px;
`;

const StyledRadio = styled.div`
  /* 라벨 스타일링 */
  label {
    display: inline-block;
    background-color: #eee;
    padding: 10px;
    border-radius: 5px;
    color: #333;
    cursor: pointer;
    margin-right: 5px;
  }
  /* input 숨김 처리 */
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  }
`;
