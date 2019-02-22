import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import UpBox from './components/UpBox';
import RightBox from './components/RightBox';
import LeftBox from './components/LeftBox';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  padding: 40px;
  width: 40%;
`;

const SubBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
`;

const App = () => {
  return (
    <Wrapper>
      <UpBox />
      <SubBoxWrapper>
        <LeftBox />
        <RightBox />
      </SubBoxWrapper>
    </Wrapper>
  );
};

export default App;
