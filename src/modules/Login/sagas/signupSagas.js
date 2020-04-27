import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {signupApiRequest} from './apiRequests';
import { SIGNUP_ISAUTHLOADER, signupSuccess, signupError} from '../actions';
import {message} from 'antd'

function* signupFlow (action) {
  try {
    const { Email, First, Password } = action;
    const response = yield call(signupApiRequest, Email, First, Password);
    message.loading('Ожидайте',2)
    yield delay(2000);
    yield put(signupSuccess(response));
    message.success('Регистрация прошла успешно!',1)
  } catch (error) {
    yield put(signupError(error));
    message.error(`${error.response.data}`,2.5);
  }
}


function* signupSagas () {
  yield takeEvery(SIGNUP_ISAUTHLOADER, signupFlow);
}

export default signupSagas
