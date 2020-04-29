import { call, put, takeEvery, delay } from "redux-saga/effects";
import { DELETE_USER_PROFILE_LOADER, 
  deleteUserProfileSuccess,
  deleteUserProfileError,
} from "../actions";
import {message} from 'antd';

function* deleteUserProfileFlow() {
  try {
    // const response = yield call(deleteUserProfileRequest, uuid);
    yield delay(500);
    yield put(deleteUserProfileSuccess());
    message.success('Аккаунт удален!', 1.5)
  } catch (error) {
    yield put(deleteUserProfileError(error));
    message.error('Ошибка!', 2.5)
  }
}

function* deleteUserProfileSagas() {
  yield takeEvery(
    [DELETE_USER_PROFILE_LOADER],
    deleteUserProfileFlow
  );
}

export default deleteUserProfileSagas;
