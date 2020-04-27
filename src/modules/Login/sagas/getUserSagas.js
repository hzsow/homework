import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {getUserApiRequest, setUserModeratedApiRequest} from './apiRequests';
import { GET_USER, getUserSuccess, getUserError } from '../actions';
import { message } from 'antd';

function* getUserFlow (action) {
  try {
    const { userId } = action;
    const response = yield call(getUserApiRequest, userId);
    yield delay(500);
    yield put(getUserSuccess(response.data))
    if (!response.data.isClient) {
      yield call(userModeration, response.data.id);
    }
  } catch (error) {
    yield put(getUserError(error));
    alert(error);
  }
}
function* userModeration(userId){
  try {
    yield call(setUserModeratedApiRequest, userId);
    yield call(messageShow);
    yield delay(5000);
  } catch (error){
    alert(error)
  }
}
function messageShow(){
  message
  .loading('Ожидайте проверку профиля..', 5)
  .then(() => message.success('Модерация прошла успешно!', 2.5))
  .then(() => message.success('Теперь вы клиент нашего банка!', 2.5))
  .then(() => message.success('Желаем успехов!', 2.5))
}
function* getUserSagas () {
  yield takeEvery(GET_USER, getUserFlow);
}

export default getUserSagas
