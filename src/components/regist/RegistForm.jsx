import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as userAPI from "api/user";
import useInputValue from "hooks/useInputValue";
import Input from "components/elements/Input";

const RegistForm = () =>{
    const navigate = useNavigate();


    const username = useInputValue('');
    const nickname = useInputValue('');
    const password = useInputValue('');
    const passwordCheck = useInputValue('');
    const mapdata = useInputValue('');

    const checkEmailId = (username) =>{
        const regexr=/^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        return regexr.test(username);
    };

    const registUser = async (e) =>{
        const payload = {
            username:username.value,
            nickname:nickname.value,
            password:password.value,
            passwordCheck:passwordCheck.value,
        };
    
        const res = await userAPI.register(payload);
    
        if(res.status === 200){
        }    
    }
    return (
        <RegistFormWrapper onSubmit={registUser}>
            <Input
                id="username"
                type="email"
                placeholder="이메일"
                onChang={username.onChange}
            />
            <Input
                id="password"
                type="password"
                placeholder="비밀번호"
                onChange={password.onChange}
            />
            <Input
                id="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
                onChange={passwordCheck.onChange}
            />
            <Input
                id="nickname"
                type="text"
                placeholder="닉네임"
                onChange={nickname.onChange}
            />
            <button>
                회원가입
            </button>
        </RegistFormWrapper>
    )
}

const RegistFormWrapper = styled.form`

`;

export default RegistForm;