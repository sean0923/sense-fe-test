import React from 'react';

import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`border: 1px solid black;`;

const LeftBox = () => {
  return (
    <Wrapper>
      <div>LeftBox</div>
      <div>LeftBox</div>
      <div>LeftBox</div>
    </Wrapper>
  );
};

export default LeftBox;
