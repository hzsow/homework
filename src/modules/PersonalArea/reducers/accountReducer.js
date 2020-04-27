import produce from 'immer';
import { SET_CURRENT_ACCOUNT, SET_CURRENT_ACCOUNT_SUCCESS, SET_CURRENT_ACCOUNT_ERROR, SET_CURRENT_ACCOUNT_INDEX } from '../actions';
  
let initialState = {
    isCurrentAccountLoader: true,
    isCurrentAccountSuccess: false,
    currentAccount: 0
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === SET_CURRENT_ACCOUNT){
            draft.isCurrentAccountLoader = true;
            draft.isCurrentAccountSuccess = false;
        }
        if (action.type === SET_CURRENT_ACCOUNT_SUCCESS){
            draft.isCurrentAccountLoader = false;
            draft.isCurrentAccountSuccess = true;
            draft.currentAccount = action.value;
        }
        if (action.type === SET_CURRENT_ACCOUNT_ERROR){
            draft.isCurrentAccountLoader = false;
            draft.isCurrentAccountSuccess = false;
            draft.currentAccount = 0;
        }
        if (action.type === SET_CURRENT_ACCOUNT_INDEX){
            draft.currentAccount = action.index;
        }
    })
}