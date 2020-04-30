import produce from 'immer';
import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    USER_MODERATION_ERROR,
    USER_MODERATION_SUCCESS,
    USER_MODERATION_LOADER
  } from '../actions';
  
let initialState = {
    userId: null,
    email: null,
    firstName: null,
    isModerated: false,
    moderationLoader: false,
    moderationSuccess: false
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
        if (action.type === USER_MODERATION_LOADER){
            draft.moderationLoader = true;
            draft.moderationSuccess = false;
        }
        if (action.type === USER_MODERATION_SUCCESS){
            draft.moderationLoader = false;
            draft.moderationSuccess = true;
        }
        if (action.type === USER_MODERATION_ERROR){
            draft.moderationLoader = false;
            draft.moderationSuccess = false;
        }
    })
}