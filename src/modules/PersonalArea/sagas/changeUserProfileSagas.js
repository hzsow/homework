import { call, put, takeEvery, delay } from "redux-saga/effects";
import { changeUserProfileRequest, getAccountsRequest } from "./apiRequests";
import { CHANGE_USER_PROFILE_LOADER,
  changeUserProfileSuccess,
  changeUserProfileError,
} from "../actions";
import {message} from 'antd';

function* changeUserProfileFlow(action) {
  try {
    const { newFirstName, newEmail } = action;
    console.log(newFirstName, newEmail);
    // const response = yield call(getAccountsRequest);
    // yield call(changeUserPasswordRequest, account_number, value2);
    yield delay(500);
    yield put(changeUserProfileSuccess());
    message.success('Профиль успешно изменен', 1.5)
  } catch (error) {
    yield put(changeUserProfileError(error));
    message.error('Ошибка!', 2.5)
  }
}

function* changeUserProfileSagas() {
  yield takeEvery(
    [CHANGE_USER_PROFILE_LOADER],
    changeUserProfileFlow
  );
}

export default changeUserProfileSagas;
