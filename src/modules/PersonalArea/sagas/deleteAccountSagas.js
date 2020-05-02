import { call, put, takeEvery, delay, select } from "redux-saga/effects";
import { deleteAccountRequest, deleteHistoryRequest } from "./apiRequests";
import { DELETE_ACCOUNT_LOADER, 
  isAccountsListDeleteAccount,
  deleteAccountSuccess,
  deleteAccountError,
  setCurrentAccountIndex,
  accountHistoryLoader
} from "../actions";
import { lastAccountIdSelector, lastAccountIndexSelector } from '../selectors/PersonalAreaSelectors';
import {message} from 'antd';

function* deleteAccountFlow(action) {
  try {
    const { uuid } = action;
    const response = yield call(deleteAccountRequest, uuid);
    yield call(deleteHistoryRequest, uuid)
    yield delay(500);
    yield put(deleteAccountSuccess(response.data));
    const lastIndex = yield select(lastAccountIndexSelector);
    yield put(setCurrentAccountIndex(lastIndex));
    yield put(isAccountsListDeleteAccount(uuid));
    const lastId = yield select(lastAccountIdSelector);
    yield put(accountHistoryLoader(lastId));
    console.log(lastIndex, lastId)
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
