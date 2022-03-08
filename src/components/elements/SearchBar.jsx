import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <SearchWrapper>
      <div>
        <span>search-logo</span>
        <input type="text" placeholder="검색어를 입력하세요." />
      </div>
      <button>검색</button>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 619px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-radius: 25.5px;
  input {
    width: 220px;
    border-radius: 10px;
    padding: 10px;
  }
  button {
    margin-right: 29px;
  }
`;

export default SearchBar;
