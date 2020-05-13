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
    message.loading('Подождите', 0);
    yield call(deleteUserProfileRequest, userId);
    yield delay(500);
    yield put(deleteUserProfileSuccess());
    message.destroy();
    message.success('Аккаунт удален!', 1.5)
    localStorage.removeItem('token');
    window.location.reload();
  } catch (error) {
    yield put(deleteUserProfileError(error));
  }
}

function* deleteUserProfileSagas() {
  yield takeEvery(
    [DELETE_USER_PROFILE_LOADER],
    deleteUserProfileFlow
  );
}

export default deleteUserProfileSagas;
