import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { loginRequest, signupRequest, signupShow, signupHide } from '../actions';
import { isSignupShow } from '../selectors/loginSelectors'
import { message } from 'antd';

export default React.memo(() => {
    const dispatch = useDispatch();
    const isSignUpShow = useSelector(isSignupShow, shallowEqual);

    const loginSubmit = (values) => {
        dispatch(loginRequest(values));
    }
    const signUpSubmit = (values) => {
        const { Password, ConfirmPassword } = values;
        if (Password === ConfirmPassword)
            dispatch(signupRequest(values));
        else message.warning('Пароли не совпадают', 1.5);
    }
    const showSignUp = () => {
        dispatch(signupShow());
    }
    const backButton = () => {
        dispatch(signupHide());
    }
    return (
        <div className="LoginPage">
            {(!isSignUpShow) && <LoginForm showSignUp={showSignUp} onSubmit={loginSubmit}/>} 
            {(isSignUpShow) && <SignupForm backButton={backButton} onSubmit={signUpSubmit}/>} 
        </div>  
    )
})