import { take, fork, cancel, call, put, delay } from 'redux-saga/effects';
import {loginApiRequest} from './apiRequests'
import { LOGIN_ISAUTHLOADER, LOGIN_ERROR, loginSuccess, loginError } from '../actions'
import jwt from 'jsonwebtoken';
import {message} from 'antd';

function* logout () {
  localStorage.removeItem('token');
}

function* loginFlow (email, password) {
  let token
  try {
    token = yield call(loginApiRequest, email, password);
    message.loading('Ожидайте', 1)
    yield delay(1000);
    const decoded = jwt.decode(token.data.accessToken);
    localStorage.setItem('token', token.data.accessToken);
    localStorage.setItem('userId', decoded.sub);
    yield put(loginSuccess({userId: decoded.sub}));
    message.success('Вход выполнен', 1.5)
  } catch (error) {
    yield put(loginError(error));
    message.error(`Ошибка ${error.response.data}`, 2.5);
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
