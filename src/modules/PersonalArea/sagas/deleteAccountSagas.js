import { call, put, takeEvery, delay } from "redux-saga/effects";
import { deleteAccountRequest, deleteHistoryRequest } from "./apiRequests";
import { DELETE_ACCOUNT_LOADER, 
  isAccountsListDeleteAccount,
  deleteAccountSuccess,
  deleteAccountError,
  setCurrentAccountIndex
} from "../actions";
import {message} from 'antd';

function* deleteAccountFlow(action) {
  try {
    const { uuid } = action;
    const response = yield call(deleteAccountRequest, uuid);
    yield call(deleteHistoryRequest, uuid)
    yield delay(500);
    yield put(deleteAccountSuccess(response.data));
    yield put(setCurrentAccountIndex(0));
    yield put(isAccountsListDeleteAccount(uuid));
    message.success('Счет закрыт', 1.5)
  } catch (error) {
    yield put(deleteAccountError(error));
    message.error('Ошибка!', 2.5)
  }
}

function* deleteAccountSagas() {
  yield takeEvery(
    [DELETE_ACCOUNT_LOADER],
    deleteAccountFlow
  );
}

export default deleteAccountSagas;
