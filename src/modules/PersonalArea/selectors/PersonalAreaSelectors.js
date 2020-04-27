import {createSelector} from 'reselect';

const accounts = state => state.accounts;  
const currentAccount = state => state.currentAccount;  
const user = state => state.user;  
const replenishAccount = state => state.replenishAccount;  
const form = state => state.form;  

export const accountsList = createSelector(accounts, accounts => accounts.accounts);
export const userId = createSelector(user, user => user.userId);
export const userSelector = createSelector(user, user => user);
export const accountsLoader = createSelector(accounts, accounts => accounts.isAccountsLoader);
export const accountsLengthSelector = createSelector(accounts, accounts => accounts.accounts.length);
export const accountsBalanceSelector = createSelector(accounts, accounts => accounts.accounts.reduce((sum, current) => sum + parseFloat(current.account_balance), 0));
export const currentAccountLoader = createSelector(currentAccount, current => current.isCurrentAccountLoader);
export const currentAccountSelector = createSelector(accounts, currentAccount, (accounts, current) => accounts.accounts[current.currentAccount]);
export const currentAccountValueSelector = createSelector(accounts, currentAccount, (accounts, current) => accounts.accounts[current.currentAccount].id);
export const replenishValueSelector = createSelector(form, form => form);
export const replenishAccountLoaderSelector = createSelector(replenishAccount, replenish => replenish.isReplenishAccountLoader);
export const replenishAccountSuccessSelector = createSelector(replenishAccount, replenish => replenish.isReplenishAccountSuccess);
export const replenishAccountModalShow = createSelector(replenishAccount, replenish => replenish.isModalShow);