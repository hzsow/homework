import { call, put, takeEvery, delay } from "redux-saga/effects";
import { changeUserPasswordRequest, getAccountsRequest } from "./apiRequests";
import { CHANGE_USER_PASSWORD_LOADER,
  changeUserPasswordSuccess,
  changeUserPasswordError,
} from "../actions";
import {message} from 'antd';

function* changeUserPasswordFlow(action) {
  try {
    const { newPassword, oldPassword } = action;
    console.log(newPassword, oldPassword);
    // const response = yield call(getAccountsRequest);
    // yield call(changeUserPasswordRequest, account_number, value2);
    yield delay(500);
    yield put(changeUserPasswordSuccess());
    message.success('Пароль успешно изменен', 1.5)
  } catch (error) {
    yield put(changeUserPasswordError(error));
    message.error('Ошибка!', 2.5)
  }
}

function* changeUserPasswordSagas() {
  yield takeEvery(
    [CHANGE_USER_PASSWORD_LOADER],
    changeUserPasswordFlow
  );
}

export default changeUserPasswordSagas;
