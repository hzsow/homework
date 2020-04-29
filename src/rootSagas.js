import signupSagas from './modules/Login/sagas/signupSagas';
import loginSagas from './modules/Login/sagas/loginSagas';
import accountsListSagas from './modules/PersonalArea/sagas/accountsListSagas';
import getUserSagas from './modules/Login/sagas/getUserSagas';
import newAccountSagas from './modules/PersonalArea/sagas/newAccountSagas';
import deleteAccountSagas from './modules/PersonalArea/sagas/deleteAccountSagas';
import replenishAccountSagas from './modules/PersonalArea/sagas/replenishAccountSagas';
import transferAccountSagas from './modules/PersonalArea/sagas/transferAccountSagas';
import {all} from 'redux-saga/effects';

export default function* rootSagas () {
  yield all([
    transferAccountSagas(),
    replenishAccountSagas(),
    deleteAccountSagas(),
    newAccountSagas(),
    getUserSagas(),
    signupSagas(),
    loginSagas(),
    accountsListSagas()
  ])
}
