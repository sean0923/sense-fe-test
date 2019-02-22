import React from 'react';
import map from 'lodash/map';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`border: 1px solid black;`;

const NameWrapper = styled.div`
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

const defaultUsersObj = {
  id_1: {
    id: 'id_1',
    name: 'default sean',
  },
  id_2: {
    id: 'id_2',
    name: 'default hong',
  },
};

const LeftBox = ({ usersObj = defaultUsersObj, setSelectedId }) => {
  return (
    <Wrapper>
      {map(usersObj, ({ name, id }) => {
        return (
          <NameWrapper onClick={() => setSelectedId(id)} key={id}>
            {`* ${name}`}
          </NameWrapper>
        );
      })}
    </Wrapper>
  );
};

export default LeftBox;
