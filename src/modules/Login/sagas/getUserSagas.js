import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {getUserApiRequest, setUserModeratedApiRequest} from './apiRequests';
import { GET_USER, loginError, getUserSuccess, getUserError, userModerationLoader, userModerationError, userModerationSuccess } from '../actions';
import { message } from 'antd';

function* getUserFlow () {
  try {
    const userId = localStorage.getItem('userId');
    const response = yield call(getUserApiRequest, userId);
    yield put(getUserSuccess(response.data))
    if (!response.data.status){
      yield put(loginError())
      message.destroy();
      message.error("Этот аккаунт закрыт!",3);
      yield delay(1000);
      window.location.reload();
    }
    if (!response.data.isClient) {
      yield call(userModeration);
    }
  } catch (error) {
    yield put(getUserError(error));
    //message.error(error);
  }
}
function* userModeration(){
  try {
    const userId = localStorage.getItem('userId');
    yield put(userModerationLoader());
    yield call(setUserModeratedApiRequest, userId);
    yield call(messageShow);
    yield delay(5000);
    yield put(userModerationSuccess());
  } catch (error){
    //message.error(error)
    yield put(userModerationError());
  }
}
function messageShow(){
  message.destroy();
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
