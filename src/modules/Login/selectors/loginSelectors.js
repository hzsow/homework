import {createSelector} from 'reselect';

const signup = state => state.signup;  
const login = state => state.login;  
const user = state => state.user;  

export const isSignupSuccess = createSelector(signup, signup => signup.isSuccess);
export const isSignupShow = createSelector(signup, signup => signup.isShow);
export const isLoginSuccess = createSelector(login, login => login.isAuth);
export const isLoginLoader = createSelector(login, login => login.isAuthLoader);
export const isUserModerated = createSelector(user, user => user.isModerated);