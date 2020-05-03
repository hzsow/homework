import produce from 'immer';
import { CHANGE_USER_PROFILE_ERROR, CHANGE_USER_PROFILE_SUCCESS, CHANGE_USER_PROFILE_LOADER, CHANGE_USER_PROFILE_MODAL_HIDE, CHANGE_USER_PROFILE_MODAL_SHOW, CHANGE_USER_PROFILE_SET_AVATAR } from '../actions';
  
let initialState = {
    isModalShow: false,
    loader: false,
    success: false,
    img: null
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === CHANGE_USER_PROFILE_LOADER){
            draft.loader = true;
            draft.success = false;
        }
        if (action.type === CHANGE_USER_PROFILE_SUCCESS){
            draft.isModalShow = false;
            draft.loader = false;
            draft.success = true;
        }
        if (action.type === CHANGE_USER_PROFILE_ERROR){
            draft.isModalShow = true;
            draft.loader = false;
            draft.success = false;
        }
        if (action.type === CHANGE_USER_PROFILE_MODAL_HIDE){
            draft.isModalShow = false;
        }
        if (action.type === CHANGE_USER_PROFILE_MODAL_SHOW){
            draft.isModalShow = true;
        }
        if (action.type === CHANGE_USER_PROFILE_SET_AVATAR){
            draft.img = action.payload.img;
        }
    })
}