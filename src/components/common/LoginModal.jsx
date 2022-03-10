import React from 'react';
import styled from 'styled-components';

import useInputValue from 'hooks/useInputValue';
import { useDispatch } from 'react-redux';
import { login } from 'redux/modules/user';

import ModalWrapper from 'components/elements/ModalWrapper';

const LoginModal = ({ modalState, handleModal }) => {
  const dispatch = useDispatch();

  const userId = useInputValue('');
  const userPw = useInputValue('');
  const handleLoginBtn = (e) => {
    e.preventDefault();
    const user = {
      username: userId.value,
      password: userPw.value,
    };
    dispatch(login(user));
    handleModal(e);
  };

  return (
    <ModalWrapper handleModal={handleModal}>
      <LoginWrapper modalState={modalState}>
        <button className="close-btn modal">close-icon</button>
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <form className="login-form modal" onSubmit={handleLoginBtn}>
          <div className="input-box">
            <input
              id="userId"
              type="id"
              placeholder="아이디"
              onChange={userId.onChange}
            />
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              onChange={userPw.onChange}
            />
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
