import React from 'react';
import useModal from 'hooks/useModal';
import LoginModal from 'components/common/LoginModal';
import SearchBar from 'components/elements/SearchBar';
import styled from 'styled-components';
import SliderSection from './SliderSection';

const CommonHeader = () => {
  const [modalState, handleModal] = useModal();

  return (
    <>
      <HeaderWrapper>
        <div className="main-logo">
          <p>LOGO</p>
        </div>
        <SearchBar />
        {modalState && (
          <LoginModal modalState={modalState} handleModal={handleModal} />
        )}
        <div className="right-nav">
          <button onClick={handleModal}>로그인</button>
        </div>
      </HeaderWrapper>
      <SliderSection />
    </>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  padding: 0 165px;
  .main-logo {
    width: 70px;
    height: 32px;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.2px;
    text-transform: uppercase;

    color: #3c64b1;
  }

  .right-nav {
    display: flex;
    > button {
      font-size: 14px;
      border-radius: 5px;
    }
  }
`;

export default CommonHeader;
