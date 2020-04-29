import produce from 'immer';
import { DELETE_USER_PROFILE_ERROR, DELETE_USER_PROFILE_SUCCESS, DELETE_USER_PROFILE_LOADER } from '../actions';
  
let initialState = {
    loader: false,
    success: false,
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === DELETE_USER_PROFILE_LOADER){
            draft.loader = true;
            draft.success = false;
        }
        if (action.type === DELETE_USER_PROFILE_SUCCESS){
            draft.loader = false;
            draft.success = true;
        }
        if (action.type === DELETE_USER_PROFILE_ERROR){
            draft.loader = false;
            draft.success = false;
        }
    })
}