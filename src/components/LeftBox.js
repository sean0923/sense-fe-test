import React from 'react';

import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`border: 1px solid black;`;

const LeftBox = ({
  users = [
    {
      id: 'id_1',
      name: 'sean',
    },
    {
      id: 'id_2',
      name: 'hong',
    },
  ],
}) => {
  return (
    <Wrapper>
      {users.map(({ name, id }) => {
        return <div key={id}>{name}</div>;
      })}
    </Wrapper>
  );
};

export default LeftBox;
