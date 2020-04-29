import { call, put, takeEvery, delay } from "redux-saga/effects";
import { changeUserPasswordRequest, getAccountsRequest } from "./apiRequests";
import { PAYMENT_ACCOUNT_LOADER,
  paymentAccountSuccess,
  paymentAccountError,
} from "../actions";
import {message} from 'antd';

function* paymentAccountFlow(action) {
  try {
    const { payload } = action;
    //const { newPassword, oldPassword } = action;
    console.log(payload);
    // const response = yield call(getAccountsRequest);
    // yield call(paymentAccountRequest, account_number, value2);
    yield delay(500);
    yield put(paymentAccountSuccess());
    message.success('Платеж совершен', 1.5)
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
