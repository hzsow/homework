import { call, put, takeEvery, delay } from "redux-saga/effects";
import { changeUserPasswordRequest } from "./apiRequests";
import { CHANGE_USER_PASSWORD_LOADER,
  changeUserPasswordSuccess,
  changeUserPasswordError,
} from "../actions";
import {message} from 'antd';

function* changeUserPasswordFlow(action) {
  try {
    const { payload: { newPassword, email, oldPassword }} = action;
    console.log(action);
    yield call(changeUserPasswordRequest, email, oldPassword, newPassword);
    yield delay(500);
    yield put(changeUserPasswordSuccess());
    message.success('Пароль успешно изменен', 1.5)
  } catch (error) {
    yield put(changeUserPasswordError(error));
    message.error(`${error.response.data.message}`, 2.5)
  }
}

function* changeUserPasswordSagas() {
  yield takeEvery(
    [CHANGE_USER_PASSWORD_LOADER],
    changeUserPasswordFlow
  );
}

export default changeUserPasswordSagas;
