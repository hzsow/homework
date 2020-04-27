import produce from 'immer';
import { DELETE_ACCOUNT_ERROR, DELETE_ACCOUNT_SUCCESS, DELETE_ACCOUNT_LOADER } from '../actions';
  
let initialState = {
    isDeleteAccountLoader: false,
    isDeteteAccountSuccess: false,
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === DELETE_ACCOUNT_LOADER){
            draft.isDeleteAccountLoader = true;
            draft.isDeteteAccountSuccess = false;
        }
        if (action.type === DELETE_ACCOUNT_SUCCESS){
            draft.isDeleteAccountLoader = false;
            draft.isDeteteAccountSuccess = true;
        }
        if (action.type === DELETE_ACCOUNT_ERROR){
            draft.isDeleteAccountLoader = false;
            draft.isDeteteAccountSuccess = false;
        }
    })
}