import React from 'react';
import map from 'lodash/map';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`border: 1px solid black;`;

const defaultUsersObj = {
  id_1: {
    id: 'id_1',
    name: 'sean',
  },
  id_2: {
    id: 'id_2',
    name: 'hong',
  },
};

const LeftBox = ({ usersObj = defaultUsersObj }) => {
  return (
    <Wrapper>
      {map(usersObj, ({ name, id }) => {
        return <div key={id}>{name}</div>;
      })}
    </Wrapper>
  );
};

export default LeftBox;
