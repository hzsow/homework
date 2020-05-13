import { call, put, takeEvery, delay } from "redux-saga/effects";
import { newAccountRequest } from "./apiRequests";
import { NEW_ACCOUNT_LOADER,
  newAccountSuccess,
  newAccountError,
  isAccountsListNewAccount,
  setCurrentAccountIndex, 
  accountHistoryLoader
} from "../actions";
import { message } from 'antd'

function* newAccountFlow(action) {
  try {
    const { length } = action;
    const userId = localStorage.getItem('userId');
    const response = yield call(newAccountRequest, userId);
    yield delay(500);
    yield put(newAccountSuccess());
    yield put(isAccountsListNewAccount(response.data));
    yield put(setCurrentAccountIndex(length));
    yield put(accountHistoryLoader(response.data.id));
    message.success('Счет открыт успешно!', 1.5)
  } catch (error) {
    yield put(newAccountError(error));
    message.error('Ошибка!', 2.5)
  }
}

function* newAccountSagas() {
  yield takeEvery(
    [NEW_ACCOUNT_LOADER],
    newAccountFlow
  );
}

export default newAccountSagas;
