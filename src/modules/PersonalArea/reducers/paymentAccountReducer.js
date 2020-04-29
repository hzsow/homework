import produce from 'immer';
import { PAYMENT_ACCOUNT_ERROR, PAYMENT_ACCOUNT_SUCCESS, PAYMENT_ACCOUNT_LOADER, PAYMENT_ACCOUNT_MODAL_HIDE, PAYMENT_ACCOUNT_MODAL_SHOW } from '../actions';
  
let initialState = {
    isModalShow: false,
    loader: false,
    success: false,
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === PAYMENT_ACCOUNT_LOADER){
            draft.loader = true;
            draft.success = false;
        }
        if (action.type === PAYMENT_ACCOUNT_SUCCESS){
            draft.isModalShow = false;
            draft.loader = false;
            draft.success = true;
        }
        if (action.type === PAYMENT_ACCOUNT_ERROR){
            draft.isModalShow = false;
            draft.loader = false;
            draft.success = false;
        }
        if (action.type === PAYMENT_ACCOUNT_MODAL_SHOW){
            draft.isModalShow = true;
        }
        if (action.type === PAYMENT_ACCOUNT_MODAL_HIDE){
            draft.isModalShow = false;
        }

    })
}