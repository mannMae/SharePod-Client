import * as userAPI from 'api/user';
import { login } from 'redux/modules/user';

import { put, call, takeLatest } from 'redux-saga/effects';

function* loginSaga(action) {
  try {
    // const res = yield call(() => userAPI.login(action.payload));
    localStorage.setItem('nickname', 'jungjin');
    const nickname = localStorage.getItem('nickname');
    // yield put({ type: `${action.type}Success`, payload: res.data.nickname });
    yield put({ type: `${action.type}Success`, payload: nickname });
  } catch (err) {
    yield put({ type: `${action.type}Failure`, payload: action.payload });
  }
}

export function* userSaga() {
  yield takeLatest(login, loginSaga);
}
