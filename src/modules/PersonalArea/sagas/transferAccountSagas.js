import { call, put, takeEvery, delay } from "redux-saga/effects";
import { transferAccountRequest, getAccountsRequest } from "./apiRequests";
import { TRANSFER_ACCOUNT_LOADER,
  transferAccountSuccess,
  transferAccountError,
} from "../actions";
import {message} from 'antd';

function* transferAccountFlow(action) {
  try {
    const { value, account_number } = action;
    const response = yield call(getAccountsRequest);
    console.log(account_number)
    console.log(response)
    const value2 = response.data.find(element => element.account_number === parseInt(account_number)).account_balance + parseFloat(value);
    console.log(value2)
    yield call(transferAccountRequest, account_number, value2);
    yield delay(500);
    yield put(transferAccountSuccess());
    // yield put(isAccountsListTransferAccount(value, uuid));
    message.success('Перевод прошел успешно', 1.5)
  } catch (error) {
    yield put(transferAccountError(error));
    message.error('Ошибка!', 2.5)
  }
}

function* transferAccountSagas() {
  yield takeEvery(
    [TRANSFER_ACCOUNT_LOADER],
    transferAccountFlow
  );
}

export default transferAccountSagas;
