import { call, put, takeEvery, delay } from "redux-saga/effects";
import { paymentAccountRequest } from "./apiRequests";
import { PAYMENT_ACCOUNT_LOADER,
  paymentAccountSuccess,
  paymentAccountError,
  isAccountsListTransferAccount,
  accountHistoryLoader
} from "../actions";
import {message} from 'antd';

function* paymentAccountFlow(action) {
  try {
    const { payload: {currentAccount, accountNumberReceiver, paymentValue, useTemplate, accountId} } = action;
    const response = yield call(paymentAccountRequest, currentAccount, accountNumberReceiver, paymentValue, useTemplate);
    yield delay(500);
    yield put(paymentAccountSuccess());
    yield put(isAccountsListTransferAccount({
      current: response.data.current,
      receiver: response.data.receiver,
    }))
    yield put(accountHistoryLoader(accountId));
    message.success('Платеж совершен', 1.5)
  } catch (error) {
    yield put(paymentAccountError(error));
    message.error('Ошибка! Платеж не совершен.', 2.5)
  }
}

function* paymentAccountSagas() {
  yield takeEvery(
    [PAYMENT_ACCOUNT_LOADER],
    paymentAccountFlow
  );
}

export default paymentAccountSagas;
