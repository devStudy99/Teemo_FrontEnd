import React from 'react';
import styled from 'styled-components';
import Banner from '@components/Feed/Banner';

function TimoFeed() {
  return (
    <Container>
      <Banner />
    </Container>
  );
}

export default TimoFeed;

const Container = styled.div`
  width: 100%;
  min-height: 1vh;
  border: 1px solid black;
  /* display: flex; */
`;
const Header = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
`;
