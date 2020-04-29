import { call, put, takeEvery, delay } from "redux-saga/effects";
import { newAccountRequest } from "./apiRequests";
import { NEW_ACCOUNT_LOADER,
  newAccountSuccess,
  newAccountError,
  isAccountsListNewAccount,
  setCurrentAccountIndex
} from "../actions";
import { v4 as uuidv4 } from 'uuid';
import { message } from 'antd'

function* newAccountFlow(action) {
  try {
    const { length } = action;
    const userId = localStorage.getItem('userId');
    const uuid = uuidv4();
    const account_number = 4000000000 + Math.floor(Math.random() * 1000000000);
    const response = yield call(newAccountRequest, userId, uuid, account_number);
    yield delay(500);
    yield put(newAccountSuccess(response.data));
    yield put(isAccountsListNewAccount({
      userId, 
      id: account_number, 
      account_number, 
      account_balance: 0
    }));
    yield put(setCurrentAccountIndex(length));
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
