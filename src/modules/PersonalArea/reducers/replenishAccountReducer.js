import produce from 'immer';
import { REPLENISH_ACCOUNT_ERROR, REPLENISH_ACCOUNT_SUCCESS, REPLENISH_ACCOUNT_LOADER, REPLENISH_ACCOUNT_MODAL_HIDE, REPLENISH_ACCOUNT_MODAL_SHOW } from '../actions';
  
let initialState = {
    isModalShow: false,
    isReplenishAccountLoader: false,
    isReplenishAccountSuccess: false,
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === REPLENISH_ACCOUNT_LOADER){
            draft.isReplenishAccountLoader = true;
            draft.isReplenishAccountSuccess = false;
        }
        if (action.type === REPLENISH_ACCOUNT_SUCCESS){
            draft.isModalShow = false;
            draft.isReplenishAccountLoader = false;
            draft.isReplenishAccountSuccess = true;
        }
        if (action.type === REPLENISH_ACCOUNT_ERROR){
            draft.isModalShow = false;
            draft.isReplenishAccountLoader = false;
            draft.isReplenishAccountSuccess = false;
        }
        if (action.type === REPLENISH_ACCOUNT_MODAL_SHOW){
            draft.isModalShow = true;
        }
        if (action.type === REPLENISH_ACCOUNT_MODAL_HIDE){
            draft.isModalShow = false;
        }

    })
}