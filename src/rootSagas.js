import signupSagas from './modules/Login/sagas/signupSagas';
import loginSagas from './modules/Login/sagas/loginSagas';
import accountsListSagas from './modules/PersonalArea/sagas/accountsListSagas';
import getUserSagas from './modules/Login/sagas/getUserSagas';
import newAccountSagas from './modules/PersonalArea/sagas/newAccountSagas';
import deleteAccountSagas from './modules/PersonalArea/sagas/deleteAccountSagas';
import replenishAccountSagas from './modules/PersonalArea/sagas/replenishAccountSagas';
import transferAccountSagas from './modules/PersonalArea/sagas/transferAccountSagas';
import changeUserProfileSagas from './modules/PersonalArea/sagas/changeUserProfileSagas';
import changeUserPasswordSagas from './modules/PersonalArea/sagas/changeUserPasswordSagas';
import deleteUserProfileSagas from './modules/PersonalArea/sagas/deleteUserProfileSagas';
import paymentAccountSagas from './modules/PersonalArea/sagas/paymentAccountSagas';
import {all} from 'redux-saga/effects';

export default function* rootSagas () {
  yield all([
    paymentAccountSagas(),
    deleteUserProfileSagas(),
    changeUserProfileSagas(),
    changeUserPasswordSagas(),
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
