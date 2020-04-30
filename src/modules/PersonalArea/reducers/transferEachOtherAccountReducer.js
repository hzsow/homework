import produce from 'immer';
import { TRANSFER_EACH_OTHER_ACCOUNT_ERROR, TRANSFER_EACH_OTHER_ACCOUNT_SUCCESS, TRANSFER_EACH_OTHER_ACCOUNT_LOADER, TRANSFER_EACH_OTHER_ACCOUNT_MODAL_HIDE, TRANSFER_EACH_OTHER_ACCOUNT_MODAL_SHOW } from '../actions';
  
let initialState = {
    isModalShow: false,
    loader: false,
    success: false,
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === TRANSFER_EACH_OTHER_ACCOUNT_LOADER){
            draft.loader = true;
            draft.success = false;
        }
        if (action.type === TRANSFER_EACH_OTHER_ACCOUNT_SUCCESS){
            draft.isModalShow = false;
            draft.loader = false;
            draft.success = true;
        }
        if (action.type === TRANSFER_EACH_OTHER_ACCOUNT_ERROR){
            draft.isModalShow = false;
            draft.loader = false;
            draft.success = false;
        }
        if (action.type === TRANSFER_EACH_OTHER_ACCOUNT_MODAL_SHOW){
            draft.isModalShow = true;
        }
        if (action.type === TRANSFER_EACH_OTHER_ACCOUNT_MODAL_HIDE){
            draft.isModalShow = false;
        }
    })
}