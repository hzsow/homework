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

export const reducers = combineReducers({
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


