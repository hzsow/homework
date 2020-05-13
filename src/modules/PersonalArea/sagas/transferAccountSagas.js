import { call, put, takeEvery, delay } from "redux-saga/effects";
import { transferAccountRequest } from "./apiRequests";
import { TRANSFER_ACCOUNT_LOADER,
  transferAccountSuccess,
  transferAccountError,
  isAccountsListTransferAccount,
  accountHistoryLoader
} from "../actions";
import {message} from 'antd';

function* transferAccountFlow(action) {
  try {
    const { payload: { value, accountNumber, currentAccount, accountId } } = action;
    const response = yield call(transferAccountRequest, currentAccount, accountNumber, value);
    yield delay(500);
    yield put(transferAccountSuccess());
    yield put(isAccountsListTransferAccount({
      current: response.data.current,
      receiver: response.data.receiver,
    }))
    yield put(accountHistoryLoader(accountId))
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
