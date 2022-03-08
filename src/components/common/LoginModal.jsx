import React from 'react';
import ModalWrapper from 'components/elements/ModalWrapper';
import styled from 'styled-components';

const LoginModal = ({ modalState, handleModal }) => {
  return (
    <ModalWrapper handleModal={handleModal}>
      <LoginWrapper modalState={modalState}>
        <button className="close-btn">close-icon</button>
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <form className="login-form">
          <div className="input-box">
            <input type="text" />
            <input type="password" />
          </div>
          <button>로그인</button>
        </form>
        <div>
          <button className="kakao-login-btn">카카오 로그인</button>
        </div>
        <div className="login-footer">
          <p>
            회원이 아니신가요?{' '}
            <span>
              <a href="#">회원가입하기</a>
            </span>
          </p>
        </div>
      </LoginWrapper>
    </ModalWrapper>
  );
};

const LoginWrapper = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 0.5rem;
  position: absolute;
  animation: fadeIn 0.5s ease;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  .close-btn {
    background-color: #fff;
    color: #000;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  .logo {
    h2 {
      font-size: 24px;
    }
  }
  .login-form {
    display: flex;
    flex-direction: row;
    gap: 10px;
    .input-box {
      display: flex;
      flex-direction: column;
      gap: 5px;
      input {
        width: 150px;
        border: 1px solid;
      }
    }
  }
  .login-footer {
    font-size: 1.5rem;
    a {
      color: gray;
    }
  }
  @keyframes fadeIn {
    0% {
      transform: translate(-50%, 100%);
      top: 50%;
      left: 50%;
    }
    100% {
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
  }
`;
export default LoginModal;
