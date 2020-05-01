import { call, put, takeEvery, delay } from "redux-saga/effects";
import { transferAccountRequest, getAccountsRequest, replenishAccountRequest, getHistoryRequest, setHistoryRequest } from "./apiRequests";
import { PAYMENT_ACCOUNT_LOADER,
  paymentAccountSuccess,
  paymentAccountError,
  historyObject
} from "../actions";
import {message} from 'antd';

function* paymentAccountFlow(action) {
  try {
    const { payload: {currentAccount, currentBalance, accountNumber, paymentValue} } = action;
    const response = yield call(getAccountsRequest);
    const value2 = response.data.find(element => element.account_number === parseInt(accountNumber)).account_balance + parseFloat(paymentValue);
    yield call(transferAccountRequest, accountNumber, value2);
    yield call(replenishAccountRequest, currentAccount, parseFloat(currentBalance)-parseFloat(paymentValue))
    yield delay(500);
    yield put(paymentAccountSuccess());
    const history = yield call(getHistoryRequest, currentAccount);
    yield call(setHistoryRequest, currentAccount, historyObject(history.data.data, "Платеж", new Date().toLocaleString(), parseFloat(paymentValue)));
    message.success('Платеж совершен', 1.5)
    window.location.reload();
  } catch (error) {
    yield put(paymentAccountError(error));
    message.error('Ошибка!', 2.5)
  }
}

function* paymentAccountSagas() {
  yield takeEvery(
    [PAYMENT_ACCOUNT_LOADER],
    paymentAccountFlow
  );
}

export default paymentAccountSagas;
