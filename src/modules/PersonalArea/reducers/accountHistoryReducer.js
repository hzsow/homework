import produce from 'immer';
import { ACCOUNT_HISTORY_ERROR, ACCOUNT_HISTORY_SUCCESS, ACCOUNT_HISTORY_LOADER } from '../actions';
  
let initialState = {
    loader: false,
    success: false,
    history: null
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === ACCOUNT_HISTORY_LOADER){
            draft.loader = true;
            draft.success = false;
            draft.history = null;
        }
        if (action.type === ACCOUNT_HISTORY_SUCCESS){
            draft.loader = false;
            draft.success = true;
            draft.history = [...action.payload];
        }
        if (action.type === ACCOUNT_HISTORY_ERROR){
            draft.loader = false;
            draft.success = false;
            draft.history = null;
        }
    })
}