import { call, put, takeEvery, delay } from "redux-saga/effects";
import {all} from "@redux-saga/core/effects";
import { createTemplateRequest, getTemplateRequest, changeTemplateRequest } from "./apiRequests";
import { CREATE_TEMPLATE_LOADER,
  GET_TEMPLATE_LOADER,
  createTemplateSuccess,
  createTemplateError,
  getTemplateSuccess,
  getTemplateError
} from "../actions";
import {message} from 'antd';

function* createTemplateFlow(action) {
  try {
    const { payload } = action;
    const { payload: {accountNumber, paymentName, paymentPurpose, paymentValue, receiverEmail, receiverName, id} } = action;
    yield call(getTemplateRequest, id);
    yield call(changeTemplateRequest, id, payload);
    message.success('Шаблон успешно изменен', 1.5);
    yield put(createTemplateSuccess());
  } catch (error) {
    try {
      const { payload } = action;
      const { id } = payload;
      yield call(createTemplateRequest, id, payload);
      yield delay(500);
      message.success('Шаблон успешно создан', 1.5);
      yield put(createTemplateSuccess());
    } catch (error2) {
        yield put(createTemplateError(error2));
        message.error('Ошибка!', 2.5)
      }
    }
  }
  
function* getTemplateFlow(action) {
  try {
    const { id } = action;
    const response = yield call(getTemplateRequest, id);
    yield put(getTemplateSuccess(response.data));
  } catch (error) {
    yield put(getTemplateError());
  }
}

function* createTemplateSagas() {
  yield all([
    takeEvery([CREATE_TEMPLATE_LOADER], createTemplateFlow),
    takeEvery([GET_TEMPLATE_LOADER], getTemplateFlow)
  ])
}

export default createTemplateSagas;
