export const ISACCOUNTSLIST_SUCCESS = 'ISACCOUNTSLIST_SUCCESS';
export const ISACCOUNTSLIST_LOADER = 'ISACCOUNTSLIST_LOADER';
export const ISACCOUNTSLIST_ERROR = 'ISACCOUNTSLIST_ERROR';
export const ISACCOUNTSLIST_NEW_ACCOUNT = 'ISACCOUNTSLIST_NEW_ACCOUNT';
export const ISACCOUNTSLIST_REPLENISH_ACCOUNT = 'ISACCOUNTSLIST_REPLENISH_ACCOUNT';
export const ISACCOUNTSLIST_DELETE_ACCOUNT = 'ISACCOUNTSLIST_DELETE_ACCOUNT';
export const SET_CURRENT_ACCOUNT = 'SET_CURRENT_ACCOUNT';
export const SET_CURRENT_ACCOUNT_INDEX = 'SET_CURRENT_ACCOUNT_INDEX';
export const SET_CURRENT_ACCOUNT_SUCCESS = 'SET_CURRENT_ACCOUNT_SUCCESS';
export const SET_CURRENT_ACCOUNT_ERROR = 'SET_CURRENT_ACCOUNT_ERROR';
export const NEW_ACCOUNT_LOADER = 'NEW_ACCOUNT_LOADER';
export const NEW_ACCOUNT_ERROR = 'NEW_ACCOUNT_ERROR';
export const NEW_ACCOUNT_SUCCESS = 'NEW_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_LOADER = 'DELETE_ACCOUNT_LOADER';
export const DELETE_ACCOUNT_ERROR = 'DELETE_ACCOUNT_ERROR';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const REPLENISH_ACCOUNT_LOADER = 'REPLENISH_ACCOUNT_LOADER';
export const REPLENISH_ACCOUNT_ERROR = 'REPLENISH_ACCOUNT_ERROR';
export const REPLENISH_ACCOUNT_SUCCESS = 'REPLENISH_ACCOUNT_SUCCESS';
export const REPLENISH_ACCOUNT_MODAL_SHOW = 'REPLENISH_ACCOUNT_MODAL_SHOW';
export const REPLENISH_ACCOUNT_MODAL_HIDE = 'REPLENISH_ACCOUNT_MODAL_HIDE';




export const isAccountsListLoader = () => {
  return {
    type: ISACCOUNTSLIST_LOADER,
  }
}
export const isAccountsListSuccess = (accounts) => {
  return {
    type: ISACCOUNTSLIST_SUCCESS,
    accounts
  }
}
export const isAccountsListError = () => {
  return {
    type: ISACCOUNTSLIST_ERROR,
  }
}
export const isAccountsListNewAccount = (account) => {
  return {
    type: ISACCOUNTSLIST_NEW_ACCOUNT,
    account
  }
}
export const isAccountsListReplenishAccount = (value, uuid) => {
  return {
    type: ISACCOUNTSLIST_REPLENISH_ACCOUNT,
    value,
    uuid
  }
}
export const isAccountsListDeleteAccount = (uuid) => {
  return {
    type: ISACCOUNTSLIST_DELETE_ACCOUNT,
    uuid
  }
}
export const setCurrentAccountSuccess = ({value}) => {
  return {
    type: SET_CURRENT_ACCOUNT_SUCCESS,
    value
  }
}
export const setCurrentAccount = ({value}) => {
  return {
    type: SET_CURRENT_ACCOUNT,
    value
  }
}
export const setCurrentAccountIndex = (index) => {
  return {
    type: SET_CURRENT_ACCOUNT_INDEX,
    index
  }
}
export const setCurrentAccountError = () => {
  return {
    type: SET_CURRENT_ACCOUNT_ERROR,
  }
}
export const newAccountSuccess = () => {
  return {
    type: NEW_ACCOUNT_SUCCESS,
  }
}
export const newAccountError = () => {
  return {
    type: NEW_ACCOUNT_ERROR,
  }
}
export const newAccountLoader = ({length}) => {
  return {
    type: NEW_ACCOUNT_LOADER,
    length
  }
}
export const deleteAccountSuccess = () => {
  return {
    type: DELETE_ACCOUNT_SUCCESS,
  }
}
export const deleteAccountError = () => {
  return {
    type: DELETE_ACCOUNT_ERROR,
  }
}
export const deleteAccountLoader = ({uuid}) => {
  return {
    type: DELETE_ACCOUNT_LOADER,
    uuid,
  }
}
export const replenishAccountSuccess = () => {
  return {
    type: REPLENISH_ACCOUNT_SUCCESS,
  }
}
export const replenishAccountError = () => {
  return {
    type: REPLENISH_ACCOUNT_ERROR,
  }
}
export const replenishAccountLoader = ({id, value, uuid, newBalance}) => {
  return {
    type: REPLENISH_ACCOUNT_LOADER,
    id,
    value,
    uuid,
    newBalance
  }
}
export const replenishModalShow = () => {
  return {
    type: REPLENISH_ACCOUNT_MODAL_SHOW
  }
}
export const replenishModalHide = () => {
  return {
    type: REPLENISH_ACCOUNT_MODAL_HIDE
  }
}