import React, { useState } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import './App.css';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import UpBox from './components/UpBox';
import RightBox from './components/RightBox';
import LeftBox from './components/LeftBox';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import testData from './data/testData';

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
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Wrapper>
      <UpBox name={get(testData, [selectedId, 'name'])} />
      <SubBoxWrapper>
        <LeftBox usersObj={testData} setSelectedId={setSelectedId} />
        <RightBox userObj={testData[selectedId]} />
      </SubBoxWrapper>
    </Wrapper>
  );
};

export default App;
