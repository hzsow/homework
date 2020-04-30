import { call, put, takeEvery, delay } from "redux-saga/effects";
import { DELETE_USER_PROFILE_LOADER, 
  deleteUserProfileSuccess,
  deleteUserProfileError,
} from "../actions";
import { deleteUserProfileRequest } from './apiRequests';
import {message} from 'antd';

function* deleteUserProfileFlow() {
  try {
    const userId = localStorage.getItem('userId');
    yield call(deleteUserProfileRequest, userId);
    yield delay(500);
    yield put(deleteUserProfileSuccess());
    message.success('Аккаунт удален!', 1.5)
    localStorage.removeItem('token');
    window.location.reload();
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
