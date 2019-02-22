import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`border: 1px solid black;`;

const RightBox = () => {
  return (
    <Wrapper>
      <div>RightBox</div>
      <div>RightBox</div>
      <div>RightBox</div>
    </Wrapper>
  );
};

export default RightBox;
