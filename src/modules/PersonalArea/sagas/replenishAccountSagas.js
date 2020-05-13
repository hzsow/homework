import { call, put, takeEvery, delay } from "redux-saga/effects";
import { replenishAccountRequest } from "./apiRequests";
import { REPLENISH_ACCOUNT_LOADER,
  replenishAccountSuccess,
  replenishAccountError,
  isAccountsListReplenishAccount,
  accountHistoryLoader
} from "../actions";
import {message} from 'antd';

function* replenishAccountFlow(action) {
  try {
    const { payload: { accountNumber, value } } = action;
    const response = yield call(replenishAccountRequest, accountNumber, value);
    yield delay(500);
    yield put(replenishAccountSuccess());
    yield put(isAccountsListReplenishAccount(response.data.value, response.data.id));
    yield put(accountHistoryLoader(response.data.id));
    message.success('Пополнение успешно', 1.5)
  } catch (error) {
    yield put(replenishAccountError(error));
    message.error('Ошибка!', 2.5)
  }
}

function* replenishAccountSagas() {
  yield takeEvery(
    [REPLENISH_ACCOUNT_LOADER],
    replenishAccountFlow
  );
}

export default replenishAccountSagas;
