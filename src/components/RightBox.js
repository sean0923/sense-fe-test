import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`border: 1px solid black;`;

const defaultUserObj = {
  id: 'id_1',
  name: 'sean',
  email: 'sean@gmail.com',
  tel: '123-123-1233',
};

const RightBox = ({ userObj = defaultUserObj }) => {
  return (
    <Wrapper>
      {['name', 'email', 'tel'].map(objKey => {
        return <div key={objKey}>{userObj[objKey]}</div>;
      })}
    </Wrapper>
  );
};

export default RightBox;
