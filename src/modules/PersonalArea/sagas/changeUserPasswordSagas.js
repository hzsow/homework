import { call, put, takeEvery, delay } from "redux-saga/effects";
import { changeUserPasswordRequest, loginApiRequest } from "./apiRequests";
import { CHANGE_USER_PASSWORD_LOADER,
  changeUserPasswordSuccess,
  changeUserPasswordError,
} from "../actions";
import {message} from 'antd';

function* changeUserPasswordFlow(action) {
  try {
    const { payload: { newPassword, email, oldPassword }} = action;
    const userId = localStorage.getItem('userId');
    yield call(loginApiRequest, email, oldPassword);
    yield call(changeUserPasswordRequest, userId, newPassword);
    yield delay(500);
    yield put(changeUserPasswordSuccess());
    message.success('Пароль успешно изменен', 1.5)
  } catch (error) {
    yield put(changeUserPasswordError(error));
    message.error(`Ошибка! ${error.response.data}`, 2.5)
  }
}

function* changeUserPasswordSagas() {
  yield takeEvery(
    [CHANGE_USER_PASSWORD_LOADER],
    changeUserPasswordFlow
  );
}

export default changeUserPasswordSagas;
