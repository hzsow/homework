import { call, put, takeEvery, delay } from "redux-saga/effects";
import { replenishAccountRequest, getAccountsRequest } from "./apiRequests";
import { TRANSFER_EACH_OTHER_ACCOUNT_LOADER,
  transferEachOtherAccountSuccess,
  transferEachOtherAccountError,
} from "../actions";
import {message} from 'antd';

function* transferEachOtherAccountFlow(action) {
  try {
    const { payload: { currentAccount, receiverAccount, value }} = action;
    const response = yield call(getAccountsRequest);
    const valueCurrent = response.data.find(element => element.account_number === parseInt(currentAccount)).account_balance - parseFloat(value);
    const valueReceiver = response.data.find(element => element.account_number === parseInt(receiverAccount)).account_balance + parseFloat(value);
    yield call(replenishAccountRequest, currentAccount, valueCurrent)
    yield call(replenishAccountRequest, receiverAccount, valueReceiver)
    yield delay(500);
    yield put(transferEachOtherAccountSuccess());
    window.location.reload();
    message.success('Перевод прошел успешно', 1.5)
  } catch (error) {
    yield put(transferEachOtherAccountError(error));
    message.error('Ошибка!', 2.5)
  }
}

function* transferEachOtherAccountSagas() {
  yield takeEvery(
    [TRANSFER_EACH_OTHER_ACCOUNT_LOADER],
    transferEachOtherAccountFlow
  );
}

export default transferEachOtherAccountSagas;
