import { call, put, takeEvery, delay, select } from "redux-saga/effects";
import { deleteAccountRequest } from "./apiRequests";
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
    yield call(deleteAccountRequest, uuid);
    yield delay(500);
    yield put(deleteAccountSuccess());
    const lastIndex = yield select(lastAccountIndexSelector);
    yield put(setCurrentAccountIndex(lastIndex));
    yield put(isAccountsListDeleteAccount(uuid));
    const lastId = yield select(lastAccountIdSelector);
    if (lastId) yield put(accountHistoryLoader(lastId));
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
