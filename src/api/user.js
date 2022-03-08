import client from 'api/client';

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
