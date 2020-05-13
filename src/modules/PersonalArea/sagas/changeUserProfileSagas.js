import { call, put, takeEvery, delay } from "redux-saga/effects";
import { changeUserProfileRequest } from "./apiRequests";
import { CHANGE_USER_PROFILE_LOADER,
  changeUserProfileSuccess,
  changeUserProfileError,
  getUser
} from "../actions";
import {message} from 'antd';

function* changeUserProfileFlow(action) {
  try {
    const { payload: { newFirstName, newEmail, confirmPassword, oldEmail, fileName }} = action;
    const userId = localStorage.getItem('userId');
    yield call(changeUserProfileRequest, oldEmail, newEmail, confirmPassword, newFirstName, fileName);
    yield delay(500);
    yield put(changeUserProfileSuccess());
    yield put(getUser({userId}));
    message.success('Профиль успешно изменен', 1.5)
  } catch (error) {
    yield put(changeUserProfileError(error));
    message.error(`${error.response.data.message}`, 2.5)
  }
}

function* changeUserProfileSagas() {
  yield takeEvery(
    [CHANGE_USER_PROFILE_LOADER],
    changeUserProfileFlow
  );
}

export default changeUserProfileSagas;
