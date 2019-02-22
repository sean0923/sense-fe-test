import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`border: 1px solid black;`;

const UpBox = ({ name = 'default name' }) => {
  return <Wrapper>{name}</Wrapper>;
};

export default UpBox;
