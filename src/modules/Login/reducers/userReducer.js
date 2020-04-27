import produce from 'immer';
import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR
  } from '../actions';
  
let initialState = {
    userId: null,
    email: null,
    firstName: null,
    isModerated: false
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === GET_USER){
            draft.userId = action.userId;
            draft.email = null;
            draft.isModerated = false;
        }
        if (action.type === GET_USER_SUCCESS){
            draft.email = action.email;
            draft.firstName = action.firstName;
            draft.isModerated = action.isModerated;
        }
        if (action.type === GET_USER_ERROR){
            draft.userId = null;
            draft.email = null;
            draft.isModerated = false;
        }
    })
}