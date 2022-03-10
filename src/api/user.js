import client from './client';

export const login = async ({ username, password }) => {
  try {
    const res = await client.post('/user/login', {
      username,
      password,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export const register = async ({
  userimg,
  username,
  nickname,
  password,
  passwordCheck,
  mapdata,
}) => {
  try {
    const res = await client.post('/user/regist', {
      userimg,
      username,
      nickname,
      password,
      passwordCheck,
      mapdata,
    });
    return res;
  } catch (err) {
    alert(err.response.data.msg);
    return err.response;
  }
};
