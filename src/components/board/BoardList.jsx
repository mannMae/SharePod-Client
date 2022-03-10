import React from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';

const BoardList = () => {
  return (
    <BoardListWrapper>
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
    </BoardListWrapper>
  );
};

const BoardListWrapper = styled.ul`
  margin: 0 auto;
  width: 1110px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default BoardList;
