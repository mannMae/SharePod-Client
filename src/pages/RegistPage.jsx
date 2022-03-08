import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import RegistForm from 'components/regist/RegistForm'

const RegistPage = () =>{
    // const navigate = useNavigate();
    const [token, setToken] = useState(false);

    useEffect (()=> {
        let myToken = "ACCESS_TOKEN"
        myToken ? setToken(true) : setToken(false);
        if(token){
            // navigate('/');
        };
    }, [token]);

    return (
        <>
            <h2>회원가입</h2>
            <RegistForm/>
        </>
    );
};

export default RegistPage;