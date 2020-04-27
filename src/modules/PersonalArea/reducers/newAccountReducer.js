import produce from 'immer';
import { NEW_ACCOUNT_ERROR, NEW_ACCOUNT_SUCCESS, NEW_ACCOUNT_LOADER } from '../actions';
  
let initialState = {
    isNewAccountLoader: false,
    isNewAccountSuccess: false,
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === NEW_ACCOUNT_LOADER){
            draft.isNewAccountLoader = true;
            draft.isNewAccountSuccess = false;
        }
        if (action.type === NEW_ACCOUNT_SUCCESS){
            draft.isNewAccountLoader = false;
            draft.isNewAccountSuccess = true;
        }
        if (action.type === NEW_ACCOUNT_ERROR){
            draft.isNewAccountLoader = false;
            draft.isNewAccountSuccess = false;
        }
    })
}