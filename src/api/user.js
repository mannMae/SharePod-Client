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

export const login = async ({ username, password }) => {
  try {
    const res = await client.post('/login', {
      username,
      password,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};