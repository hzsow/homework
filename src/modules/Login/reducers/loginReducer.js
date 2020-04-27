import produce from 'immer';
import {
    LOGIN_ISAUTHLOADER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
  } from '../actions';
  
let initialState = {
    isAuthLoader: false,
    isAuth: false
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === LOGIN_ISAUTHLOADER){
            draft.isAuthLoader = true;
            draft.isAuth = false;
        }
        if (action.type === LOGIN_SUCCESS){
            draft.isAuthLoader = false;
            draft.isAuth = true;
        }
        if (action.type === LOGIN_ERROR){
            draft.isAuthLoader = false;
            draft.isAuth = false;
        }
    })
}