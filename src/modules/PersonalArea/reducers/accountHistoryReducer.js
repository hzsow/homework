import produce from 'immer';
import { ACCOUNT_HISTORY_ERROR, ACCOUNT_HISTORY_SUCCESS, ACCOUNT_HISTORY_LOADER, ACCOUNT_HISTORY_FILTER } from '../actions';
import moment from 'moment';

let initialState = {
    loader: false,
    success: false,
    history: null,
    filteredHistory: null
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === ACCOUNT_HISTORY_LOADER){
            draft.loader = true;
            draft.success = false;
            draft.history = null;
            draft.filteredHistory = null;
        }
        if (action.type === ACCOUNT_HISTORY_SUCCESS){
            draft.loader = false;
            draft.success = true;
            draft.history = [...action.payload];
            draft.filteredHistory = [...action.payload];
        }
        if (action.type === ACCOUNT_HISTORY_ERROR){
            draft.loader = false;
            draft.success = false;
            draft.history = null;
            draft.filteredHistory = null;
        }
        if (action.type === ACCOUNT_HISTORY_FILTER){
            draft.filteredHistory = []
            draft.history.forEach(el => {
                if (moment(el.date).isBetween(action.payload.min, action.payload.max)){
                        draft.filteredHistory.push(el);
                    }
            })
        }

    })
}