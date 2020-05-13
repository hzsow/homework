import produce from 'immer';
import { ISACCOUNTSLIST_SUCCESS, ISACCOUNTSLIST_LOADER, ISACCOUNTSLIST_ERROR, ISACCOUNTSLIST_DELETE_ACCOUNT, 
    ISACCOUNTSLIST_REPLENISH_ACCOUNT, ISACCOUNTSLIST_NEW_ACCOUNT, ISACCOUNTSLIST_TRANSFER_ACCOUNT,
} from '../actions';
  
let initialState = {
    isAccountsLoader: false,
    isAccountsSuccess: false,
    accounts: [{
    }]
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === ISACCOUNTSLIST_SUCCESS){
            draft.isAccountsLoader = false;
            draft.isAccountsSuccess = true;
            draft.accounts = [];
            draft.accounts.push(...action.accounts);
        }
        if (action.type === ISACCOUNTSLIST_LOADER){
            draft.isAccountsLoader = true;
            draft.isAccountsSuccess = false;
        }
        if (action.type === ISACCOUNTSLIST_ERROR){
            draft.isAccountsLoader = false;
            draft.isAccountsSuccess = false;
            draft.accounts = [];
        }
        if (action.type === ISACCOUNTSLIST_NEW_ACCOUNT){
            draft.accounts.push(action.account)
        }
        if (action.type === ISACCOUNTSLIST_REPLENISH_ACCOUNT){
            draft.accounts[draft.accounts.findIndex((account) => account.id === action.uuid)].accountBalance = action.value
        }
        if (action.type === ISACCOUNTSLIST_DELETE_ACCOUNT){
            draft.accounts.splice(draft.accounts.findIndex((account) => account.id === action.uuid),1);
        }
        if (action.type === ISACCOUNTSLIST_TRANSFER_ACCOUNT){
            const receiver = action.payload.receiver;
            const current = action.payload.current;
            const draftReceiverIndex = draft.accounts.findIndex((account) => account.id === receiver.id)
            const draftCurrentIndex = draft.accounts.findIndex((account) => account.id === current.id)
            if (draftReceiverIndex !== -1)
                draft.accounts[draftReceiverIndex].accountBalance = receiver.accountBalance;
            if (draftCurrentIndex !== -1)
                draft.accounts[draftCurrentIndex].accountBalance = current.accountBalance;
        }
    })
}