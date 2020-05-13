import { call, put, takeEvery, delay } from "redux-saga/effects";
import { getHistoryRequest } from "./apiRequests";
import { ACCOUNT_HISTORY_LOADER,
  accountHistorySuccess,
  accountHistoryError,
} from "../actions";

function* accountHistoryFlow(action) {
  try {
    const { id } = action;
    const response = yield call(getHistoryRequest, id);
    yield delay(250);
    yield put(accountHistorySuccess(response.data));
  } catch (error) {
    yield put(accountHistoryError(error));
  }
}

function* accountHistorySagas() {
  yield takeEvery(
    [ACCOUNT_HISTORY_LOADER],
    accountHistoryFlow
  );
}

export default accountHistorySagas;
