import signupSagas from './modules/Login/sagas/signupSagas';
import loginSagas from './modules/Login/sagas/loginSagas';
import accountsListSagas from './modules/PersonalArea/sagas/accountsListSagas';
import getUserSagas from './modules/Login/sagas/getUserSagas';
import newAccountSagas from './modules/PersonalArea/sagas/newAccountSagas';
import deleteAccountSagas from './modules/PersonalArea/sagas/deleteAccountSagas';
import replenishAccountSagas from './modules/PersonalArea/sagas/replenishAccountSagas';
import transferAccountSagas from './modules/PersonalArea/sagas/transferAccountSagas';
import transferEachOtherAccountSagas from './modules/PersonalArea/sagas/transferEachOtherAccountSagas';
import changeUserProfileSagas from './modules/PersonalArea/sagas/changeUserProfileSagas';
import changeUserPasswordSagas from './modules/PersonalArea/sagas/changeUserPasswordSagas';
import deleteUserProfileSagas from './modules/PersonalArea/sagas/deleteUserProfileSagas';
import paymentAccountSagas from './modules/PersonalArea/sagas/paymentAccountSagas';
import createTemplateSagas from './modules/PersonalArea/sagas/createTemplateSagas';
import {all} from 'redux-saga/effects';

export default function* rootSagas () {
  yield all([
    createTemplateSagas(),
    paymentAccountSagas(),
    deleteUserProfileSagas(),
    changeUserProfileSagas(),
    changeUserPasswordSagas(),
    transferEachOtherAccountSagas(),
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
