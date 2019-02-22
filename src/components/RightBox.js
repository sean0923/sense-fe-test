import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`border: 1px solid black;`;

const defaultUserObj = {
  id: 'id_1',
  name: 'default default',
  email: 'default@gmail.com',
  tel: '123-123-1233',
  notes: 'default notes',
};

const RightBox = ({ userObj = defaultUserObj }) => {
  return (
    <Wrapper>
      {['email', 'tel', 'notes'].map(label => {
        return (
          <div key={label}>
            <span>{`${label}: ${userObj[label]}`}</span>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default RightBox;
