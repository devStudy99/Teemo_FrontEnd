import React from 'react';
import styled from 'styled-components';
import hug from '@image/hug.svg';
import polygon from '@image/polygon.svg';
import doubleCircle from '@image/doubleCircle.svg';
import roundSquare from '@image/roundSquare.svg';

function Banner() {
  return (
    <>
      <Conainer>
        <HugImg>
          <img src={hug} alt="포옹하는 사진" width={'300px'} height={'300px'} />
        </HugImg>
        {/* <img src={polygon} alt="포옹하는 사진" width={'300px'} height={'300px'} />
        <img src={doubleCircle} alt="포옹하는 사진" width={'300px'} height={'300px'} />
        <img src={polygon} alt="포옹하는 사진" width={'300px'} height={'300px'} />
        <img src={roundSquare} alt="포옹하는 사진" width={'300px'} height={'300px'} /> */}
        <div style={{ padding: '20px' }}>
          <Title>티모피드</Title>
          <SubTitle>복잡하고 어려운 금융 정보를 쉽고 간단하게</SubTitle>
          <SubTitle>내게 꼭 필요한 금융정보! 티모에서 확인하세요!</SubTitle>
        </div>
      </Conainer>
    </>
  );
}

export default Banner;

const Conainer = styled.div`
  height: 300px;
  width: 100%;
  background-color: #ebe8f9;
  display: flex;
  position: relative;
`;

const HugImg = styled.div`
  position: absolute;
  top: 23px;
  right: 150px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const SubTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #717171;
`;
