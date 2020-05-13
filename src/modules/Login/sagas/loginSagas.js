import { take, fork, cancel, call, put, delay } from 'redux-saga/effects';
import {loginApiRequest} from './apiRequests'
import { LOGIN_ISAUTHLOADER, LOGIN_ERROR, loginSuccess, loginError } from '../actions'
import {message} from 'antd';

function logout () {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
}

function* loginFlow (email, password) {
  let token
  try {
    message.loading('Ожидайте', 0)
    token = yield call(loginApiRequest, email, password);
    yield localStorage.setItem('token', token.data.token);
    yield localStorage.setItem('userId', token.data.userId);
    yield delay(1000);
    yield put(loginSuccess({userId: token.data.userId}));
    message.destroy();
    message.success('Вход выполнен', 1.5)
  } catch (error) {
    yield put(loginError(error));
    message.destroy();
    message.error(`${error.response.data.message}`, 2.5);
  }
  return token
}

function* loginSaga () {
  while (true) {
    const { Email, Password } = yield take(LOGIN_ISAUTHLOADER);
    yield fork(loginFlow, Email, Password);
    yield take([LOGIN_ERROR]);
    yield call(logout);
  }
}

export default loginSaga
