import produce from 'immer';
import { TRANSFER_ACCOUNT_ERROR, TRANSFER_ACCOUNT_SUCCESS, TRANSFER_ACCOUNT_LOADER, TRANSFER_ACCOUNT_MODAL_HIDE, TRANSFER_ACCOUNT_MODAL_SHOW } from '../actions';
  
let initialState = {
    isModalShow: false,
    isTransferAccountLoader: false,
    isTransferAccountSuccess: false,
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === TRANSFER_ACCOUNT_LOADER){
            draft.isTransferAccountLoader = true;
            draft.isTransferAccountSuccess = false;
        }
        if (action.type === TRANSFER_ACCOUNT_SUCCESS){
            draft.isModalShow = false;
            draft.isTransferAccountLoader = false;
            draft.isTransferAccountSuccess = true;
        }
        if (action.type === TRANSFER_ACCOUNT_ERROR){
            draft.isModalShow = false;
            draft.isTransferAccountLoader = false;
            draft.isTransferAccountSuccess = false;
        }
        if (action.type === TRANSFER_ACCOUNT_MODAL_SHOW){
            draft.isModalShow = true;
        }
        if (action.type === TRANSFER_ACCOUNT_MODAL_HIDE){
            draft.isModalShow = false;
        }

    })
}