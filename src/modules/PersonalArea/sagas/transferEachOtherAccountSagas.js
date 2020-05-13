import { call, put, takeEvery, delay } from "redux-saga/effects";
import { transferAccountRequest } from "./apiRequests";
import { TRANSFER_EACH_OTHER_ACCOUNT_LOADER,
  transferEachOtherAccountSuccess,
  transferEachOtherAccountError,
  isAccountsListTransferAccount,
  accountHistoryLoader
} from "../actions";
import {message} from 'antd';

function* transferEachOtherAccountFlow(action) {
  try {
    const { payload: { currentAccount, receiverAccount, value, accountId }} = action;
    const response = yield call(transferAccountRequest, currentAccount, receiverAccount, value);
    yield delay(500);
    yield put(transferEachOtherAccountSuccess());
    yield put(isAccountsListTransferAccount({
      current: response.data.current,
      receiver: response.data.receiver,
    }))
    yield put(accountHistoryLoader(accountId));
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
