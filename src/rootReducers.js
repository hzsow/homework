import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signupReducer from './modules/Login/reducers/signupReducer';
import loginReducer from './modules/Login/reducers/loginReducer';
import accountsListReducer from './modules/PersonalArea/reducers/accountListReducer';
import accountReducer from './modules/PersonalArea/reducers/accountReducer';
import userReducer from './modules/Login/reducers/userReducer';
import newAccountReducer from './modules/PersonalArea/reducers/newAccountReducer';
import deleteAccountReducer from './modules/PersonalArea/reducers/deleteAccountReducer';
import replenishAccountReducer from './modules/PersonalArea/reducers/replenishAccountReducer';
import transferAccountReducer from './modules/PersonalArea/reducers/transferAccountReducer';
import transferEachOtherAccountReducer from './modules/PersonalArea/reducers/transferEachOtherAccountReducer';
import changeUserPasswordReducer from './modules/PersonalArea/reducers/changeUserPasswordReducer';
import changeUserProfileReducer from './modules/PersonalArea/reducers/changeUserProfileReducer';
import deleteUserProfileReducer from './modules/PersonalArea/reducers/deleteUserProfileReducer';
import paymentAccountReducer from './modules/PersonalArea/reducers/paymentAccountReducer';
import createTemplateReducer from './modules/PersonalArea/reducers/createTemplateReducer';
import accountHistoryReducer from './modules/PersonalArea/reducers/accountHistoryReducer';

export const reducers = combineReducers({
    accountHistory: accountHistoryReducer,
    createTemplate: createTemplateReducer,
    paymentAccount: paymentAccountReducer,
    deleteUserProfile: deleteUserProfileReducer,
    changeUserProfile: changeUserProfileReducer,
    changeUserPassword: changeUserPasswordReducer,
    transferEachOtherAccount: transferEachOtherAccountReducer,
    transferAccount: transferAccountReducer,
    replenishAccount: replenishAccountReducer,
    deleteAccount: deleteAccountReducer, 
    newAccount: newAccountReducer,
    currentAccount: accountReducer, 
    user: userReducer,
    accounts: accountsListReducer,
    signup: signupReducer,
    login: loginReducer,
    form: formReducer,
  });


