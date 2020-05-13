import { call, put, takeEvery, delay, select } from "redux-saga/effects";
import { accountsListRequest } from "./apiRequests";
import {
  ISACCOUNTSLIST_LOADER,
  SET_CURRENT_ACCOUNT,
  setCurrentAccountSuccess,
  setCurrentAccountError,
  isAccountsListError,
  isAccountsListSuccess,
  accountHistoryLoader
} from "../actions";
import { currentAccountValueSelector } from '../selectors/PersonalAreaSelectors';

function* accountsListFlow(action) {
  try {
    const { value } = action;
    const userId = localStorage.getItem('userId');
    const response = yield call(accountsListRequest, userId);
    yield delay(500);
    yield put(isAccountsListSuccess(response.data));
    yield put(setCurrentAccountSuccess(value ? value: 0));
    const accountNumber = yield select(currentAccountValueSelector); 
    yield put(accountHistoryLoader(accountNumber));
  } catch (error) {
    yield put(isAccountsListError(error));
    yield put(setCurrentAccountError());
  }
}

function* accountsListSagas() {
  yield takeEvery(
    [ISACCOUNTSLIST_LOADER, SET_CURRENT_ACCOUNT],
    accountsListFlow
  );
}

export default accountsListSagas;
