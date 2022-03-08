import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as userAPI from "api/user";
import useInputValue from "hooks/useInputValue";
import Input from "components/elements/Input";
import Image from "components/elements/Image";
import Dropdown from "components/elements/Dropdown";

const RegistForm = () =>{
    // const navigate = useNavigate();

    const [imageSrc, setImageSrc] = useState('');
    const [userImg, setUserImg] = useState(null);

    const userName = useInputValue('');
    const nickname = useInputValue('');
    const password = useInputValue('');
    const passwordCheck = useInputValue('');
    const [mapdata, setMapData] = useState('');


    const handleFileInput = (e) => {
        const file = e.target.files[0];
        
        if(!(file.type === 'image/jpeg' || file.type === 'image/png')){
            alert('jpg, png 파일만 등록할 수 있습니다.')
            return
        };
        
        if(file.size>30000000) {
            alert("3MB 이하의 이미지만 등록할 수 있습니다.");
            return
        };
        setUserImg(file)
        encodeFileToBase64(file);
    }


    //
    //미리보기 이미지 인코딩
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) =>{
            reader.onload = () =>{
                setImageSrc(reader.result);
                resolve();
            }
        })
    }

    const checkEmailId = (userName) =>{
        const regexr=/^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        return regexr.test(userName);
    };

    const registUser = async (e) =>{
        e.preventDefault();

        if (
            userName.value === ''||
            password.value === ''||
            passwordCheck.value === ''||
            nickname.value === ''            
        ){
            alert("회원가입 양식을 입력해주세요.")
            return;
        }
        if(!checkEmailId(userName.value)){
            alert("이메일 주소를 확인해주세요.")
            return;
        }

        if( password.value !== passwordCheck.value){
            alert("비밀번호 확인이 일치하지 않습니다.")
            return;
        }
        const payload = {
            userimg:userImg,
            username:userName.value,
            nickname:nickname.value,
            password:password.value,
            passwordCheck:passwordCheck.value,
            mapdata:mapdata,
        };
        console.log(payload)

        const res = await userAPI.register(payload);
    
        if(res.status === 200){
        }    
    }


    const mapDataList = [
        { value: "종로구", name: "종로구" },
        { value: "중구", name: "중구" },
        { value: "용산구", name: "용산구" },
        { value: "성동구", name: "성동구" },
        { value: "광진구", name: "광진구" },
        { value: "동대문구", name: "동대문구" },
        { value: "중랑구", name: "중랑구" },
        { value: "성북구", name: "성북구" },
        { value: "강북구", name: "강북구" },
        { value: "도봉구", name: "도봉구" },
        { value: "노원구", name: "노원구" },
        { value: "은평구", name: "은평구" },
        { value: "서대문구", name: "서대문구" },
        { value: "마포구", name: "마포구" },
        { value: "양천구", name: "양천구" },
        { value: "강서구", name: "강서구" },
        { value: "구로구", name: "구로구" },
        { value: "금천구", name: "금천구" },
        { value: "영등포구", name: "영등포구" },
        { value: "동작구", name: "동작구" },
        { value: "관악구", name: "관악구" },
        { value: "서초구", name: "서초구" },
        { value: "강남구", name: "강남구" },
        { value: "송파구", name: "송파구" },
        { value: "강동구", name: "강동구" },
    ]

    return (
        <RegistFormWrapper onSubmit={registUser}>

            <Input
                id="userImg"
                type="file"
                placeholder="프로필이미지"
                onChange={handleFileInput}
            />
            <Image
                size="100"
                shape="circle"
                src={imageSrc ? imageSrc : "http://via.placeholder.com/400x300"}
            />

            <Input
                id="userName"
                type="email"
                placeholder="이메일"
                onChange={userName.onChange}
                width="540"
                height="56"
            />
            <Input
                id="nickname"
                type="text"
                placeholder="닉네임"
                onChange={nickname.onChange}
                width="540"
                height="56"
            />
            <Input
                id="password"
                type="password"
                placeholder="비밀번호"
                onChange={password.onChange}
                width="540"
                height="56"
            />
            <Input
                id="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
                onChange={passwordCheck.onChange}
                width="540"
                height="56"
            />
            <Dropdown options={mapDataList} changeData={setMapData} style="1"/>
            <button>
                회원가입
            </button>
        </RegistFormWrapper>
    )
}

const RegistFormWrapper = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 1.4rem;
gap: 2rem;
margin: 3rem;
.regist-btn {
  width: 300px;
  margin: 20px 30px;
  padding: 15px 10px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 1.6rem;
}
`;

export default RegistForm;