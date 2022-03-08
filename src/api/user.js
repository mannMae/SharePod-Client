import client from './client';

export const register = async ({userName, password, passwordCheck, nickname}) =>{
    try {
        const res = await client.post('/register', {
            userName,
            password,
            passwordCheck,
            nickname,
        });
        return res;
    } catch(err) {
        alert(err.response.data.msg);
        return err.response;
    }
}