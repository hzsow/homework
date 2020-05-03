import { call, put, takeEvery, delay } from "redux-saga/effects";
import { changeUserProfileRequest, loginApiRequest } from "./apiRequests";
import { CHANGE_USER_PROFILE_LOADER,
  changeUserProfileSuccess,
  changeUserProfileError,
  getUser
} from "../actions";
import {message} from 'antd';

function* changeUserProfileFlow(action) {
  try {
    const { payload: { newFirstName, newEmail, confirmPassword, oldEmail, imageUrl }} = action;
    const userId = localStorage.getItem('userId');
    yield call(loginApiRequest, oldEmail, confirmPassword);
    yield call(changeUserProfileRequest, userId, newEmail, newFirstName, imageUrl);
    yield delay(500);
    yield put(changeUserProfileSuccess());
    yield put(getUser({userId}));
    message.success('Профиль успешно изменен', 1.5)
  } catch (error) {
    yield put(changeUserProfileError(error));
    message.error(`Ошибка! ${error.response.data}`, 2.5)
  }
}

function* changeUserProfileSagas() {
  yield takeEvery(
    [CHANGE_USER_PROFILE_LOADER],
    changeUserProfileFlow
  );
}

export default changeUserProfileSagas;
