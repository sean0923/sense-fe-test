import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
      <Wrapper>
        <UpBox />
        <RightBox />
        <LeftBox />
      </Wrapper>
    );
  }
}

export default App;
