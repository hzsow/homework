import produce from 'immer';
import {SIGNUP_ISAUTHLOADER, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNUP_SHOW, SIGNUP_HIDE} from '../actions';

let initialState = {
    isAuthLoader: false,
    isSuccess: false,
    isShow: false,
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === SIGNUP_ISAUTHLOADER){
            draft.isAuthLoader = true;
            draft.isSuccess = false;
        }
        if (action.type === SIGNUP_SUCCESS){
            draft.isAuthLoader = false;
            draft.isSuccess = true;
            draft.isShow = false;
        }
        if (action.type === SIGNUP_ERROR){
            draft.isAuthLoader = false;
            draft.isSuccess = false;
            draft.isShow = true;
        }
        if (action.type === SIGNUP_SHOW){
            draft.isShow = true;
        }
        if (action.type === SIGNUP_HIDE){
            draft.isShow = false;
        }
    })
}
