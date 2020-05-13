import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {signupApiRequest} from './apiRequests';
import { SIGNUP_ISAUTHLOADER, signupSuccess, signupError} from '../actions';
import {message} from 'antd'

function* signupFlow (action) {
  try {
    const { Email, First, Password } = action;
    message.loading('Ожидайте',0);
    const response = yield call(signupApiRequest, Email, First, Password);
    yield delay(2000);
    yield put(signupSuccess(response));
    message.destroy();
    message.success('Регистрация прошла успешно!',1)
  } catch (error) {
    yield put(signupError(error));
    message.destroy();
    message.error(`${error.response.data.message}`,2.5);
  }
}


function* signupSagas () {
  yield takeEvery(SIGNUP_ISAUTHLOADER, signupFlow);
}

export default signupSagas
