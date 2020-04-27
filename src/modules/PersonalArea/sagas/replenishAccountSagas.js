import { call, put, takeEvery, delay } from "redux-saga/effects";
import { replenishAccountRequest } from "./apiRequests";
import { REPLENISH_ACCOUNT_LOADER,
  replenishAccountSuccess,
  replenishAccountError,
  isAccountsListReplenishAccount
} from "../actions";
import {message} from 'antd';

function* replenishAccountFlow(action) {
  try {
    const { id, value, uuid, newBalance } = action;
    const response = yield call(replenishAccountRequest, id, newBalance);
    yield delay(500);
    yield put(replenishAccountSuccess(response.data));
    yield put(isAccountsListReplenishAccount(value, uuid));
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
