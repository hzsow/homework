import moment from 'moment'

export const ISACCOUNTSLIST_SUCCESS = 'ISACCOUNTSLIST_SUCCESS';
export const ISACCOUNTSLIST_LOADER = 'ISACCOUNTSLIST_LOADER';
export const ISACCOUNTSLIST_ERROR = 'ISACCOUNTSLIST_ERROR';
export const ISACCOUNTSLIST_NEW_ACCOUNT = 'ISACCOUNTSLIST_NEW_ACCOUNT';
export const ISACCOUNTSLIST_REPLENISH_ACCOUNT = 'ISACCOUNTSLIST_REPLENISH_ACCOUNT';
export const ISACCOUNTSLIST_TRANSFER_ACCOUNT = 'ISACCOUNTSLIST_TRANSFER_ACCOUNT';
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
export const TRANSFER_ACCOUNT_LOADER = 'TRANSFER_ACCOUNT_LOADER';
export const TRANSFER_ACCOUNT_ERROR = 'TRANSFER_ACCOUNT_ERROR';
export const TRANSFER_ACCOUNT_SUCCESS = 'TRANSFER_ACCOUNT_SUCCESS';
export const TRANSFER_ACCOUNT_MODAL_SHOW = 'TRANSFER_ACCOUNT_MODAL_SHOW';
export const TRANSFER_ACCOUNT_MODAL_HIDE = 'TRANSFER_ACCOUNT_MODAL_HIDE';
export const TRANSFER_EACH_OTHER_ACCOUNT_LOADER = 'TRANSFER_EACH_OTHER_ACCOUNT_LOADER';
export const TRANSFER_EACH_OTHER_ACCOUNT_ERROR = 'TRANSFER_EACH_OTHER_ACCOUNT_ERROR';
export const TRANSFER_EACH_OTHER_ACCOUNT_SUCCESS = 'TRANSFER_EACH_OTHER_ACCOUNT_SUCCESS';
export const TRANSFER_EACH_OTHER_ACCOUNT_MODAL_SHOW = 'TRANSFER_EACH_OTHER_ACCOUNT_MODAL_SHOW';
export const TRANSFER_EACH_OTHER_ACCOUNT_MODAL_HIDE = 'TRANSFER_EACH_OTHER_ACCOUNT_MODAL_HIDE';
export const CHANGE_USER_PASSWORD_LOADER = 'CHANGE_USER_PASSWORD_LOADER';
export const CHANGE_USER_PASSWORD_SUCCESS = 'CHANGE_USER_PASSWORD_SUCCESS';
export const CHANGE_USER_PASSWORD_ERROR = 'CHANGE_USER_PASSWORD_ERROR';
export const CHANGE_USER_PASSWORD_MODAL_SHOW = 'CHANGE_USER_PASSWORD_MODAL_SHOW';
export const CHANGE_USER_PASSWORD_MODAL_HIDE = 'CHANGE_USER_PASSWORD_MODAL_HIDE';
export const CHANGE_USER_PROFILE_LOADER = 'CHANGE_USER_PROFILE_LOADER';
export const CHANGE_USER_PROFILE_SUCCESS = 'CHANGE_USER_PROFILE_SUCCESS';
export const CHANGE_USER_PROFILE_ERROR = 'CHANGE_USER_PROFILE_ERROR';
export const CHANGE_USER_PROFILE_MODAL_SHOW = 'CHANGE_USER_PROFILE_MODAL_SHOW';
export const CHANGE_USER_PROFILE_MODAL_HIDE = 'CHANGE_USER_PROFILE_MODAL_HIDE';
export const CHANGE_USER_PROFILE_SET_AVATAR = 'CHANGE_USER_PROFILE_SET_AVATAR';
export const DELETE_USER_PROFILE_LOADER = 'DELETE_USER_PROFILE_LOADER';
export const DELETE_USER_PROFILE_SUCCESS = 'DELETE_USER_PROFILE_SUCCESS';
export const DELETE_USER_PROFILE_ERROR = 'DELETE_USER_PROFILE_ERROR';
export const PAYMENT_ACCOUNT_LOADER = 'PAYMENT_ACCOUNT_LOADER';
export const PAYMENT_ACCOUNT_SUCCESS = 'PAYMENT_ACCOUNT_SUCCESS';
export const PAYMENT_ACCOUNT_ERROR = 'PAYMENT_ACCOUNT_ERROR';
export const PAYMENT_ACCOUNT_MODAL_SHOW = 'PAYMENT_ACCOUNT_MODAL_SHOW';
export const PAYMENT_ACCOUNT_MODAL_HIDE = 'PAYMENT_ACCOUNT_MODAL_HIDE';
export const CREATE_TEMPLATE_LOADER = 'CREATE_TEMPLATE_LOADER';
export const CREATE_TEMPLATE_SUCCESS = 'CREATE_TEMPLATE_SUCCESS';
export const CREATE_TEMPLATE_ERROR = 'CREATE_TEMPLATE_ERROR';
export const CREATE_TEMPLATE_MODAL_SHOW = 'CREATE_TEMPLATE_MODAL_SHOW';
export const CREATE_TEMPLATE_MODAL_HIDE = 'CREATE_TEMPLATE_MODAL_HIDE';
export const GET_TEMPLATE_LOADER = 'GET_TEMPLATE_LOADER';
export const GET_TEMPLATE_SUCCESS = 'GET_TEMPLATE_SUCCESS';
export const GET_TEMPLATE_ERROR = 'GET_TEMPLATE_ERROR';
export const GET_USER = 'GET_USER'
export const ACCOUNT_HISTORY_LOADER = 'ACCOUNT_HISTORY_LOADER';
export const ACCOUNT_HISTORY_SUCCESS = 'ACCOUNT_HISTORY_SUCCESS';
export const ACCOUNT_HISTORY_ERROR = 'ACCOUNT_HISTORY_ERROR';
export const ACCOUNT_HISTORY_FILTER = 'ACCOUNT_HISTORY_FILTER';

export const getUser = ({userId}) => {
  return {
    type: GET_USER,
    userId
  }
}
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
export const isAccountsListTransferAccount = (value, uuid) => {
  return {
    type: ISACCOUNTSLIST_TRANSFER_ACCOUNT,
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
export const setCurrentAccountSuccess = (value) => {
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
export const transferAccountSuccess = () => {
  return {
    type: TRANSFER_ACCOUNT_SUCCESS,
  }
}
export const transferAccountError = () => {
  return {
    type: TRANSFER_ACCOUNT_ERROR,
  }
}
export const transferAccountLoader = ({payload}) => {
  return {
    type: TRANSFER_ACCOUNT_LOADER,
    payload
  }
}
export const transferModalShow = () => {
  return {
    type: TRANSFER_ACCOUNT_MODAL_SHOW
  }
}
export const transferModalHide = () => {
  return {
    type: TRANSFER_ACCOUNT_MODAL_HIDE
  }
}
export const transferEachOtherAccountSuccess = () => {
  return {
    type: TRANSFER_EACH_OTHER_ACCOUNT_SUCCESS,
  }
}
export const transferEachOtherAccountError = () => {
  return {
    type: TRANSFER_EACH_OTHER_ACCOUNT_ERROR,
  }
}
export const transferEachOtherAccountLoader = ({payload}) => {
  return {
    type: TRANSFER_EACH_OTHER_ACCOUNT_LOADER,
    payload
  }
}
export const transferEachOtherModalShow = () => {
  return {
    type: TRANSFER_EACH_OTHER_ACCOUNT_MODAL_SHOW
  }
}
export const transferEachOtherModalHide = () => {
  return {
    type: TRANSFER_EACH_OTHER_ACCOUNT_MODAL_HIDE
  }
}
export const changeUserPasswordLoader = ({payload}) => {
  return {
    type: CHANGE_USER_PASSWORD_LOADER,
    payload,
  }
}
export const changeUserPasswordSuccess = () => {
  return {
    type: CHANGE_USER_PASSWORD_SUCCESS
  }
}
export const changeUserPasswordError = () => {
  return {
    type: CHANGE_USER_PASSWORD_ERROR
  }
}
export const changeUserPasswordModalHide = () => {
  return {
    type: CHANGE_USER_PASSWORD_MODAL_HIDE
  }
}
export const changeUserPasswordModalShow = () => {
  return {
    type: CHANGE_USER_PASSWORD_MODAL_SHOW
  }
}
export const changeUserProfileLoader = ({payload}) => {
  return {
    type: CHANGE_USER_PROFILE_LOADER,
    payload,
  }
}
export const changeUserProfileSuccess = () => {
  return {
    type: CHANGE_USER_PROFILE_SUCCESS
  }
}
export const changeUserProfileError = () => {
  return {
    type: CHANGE_USER_PROFILE_ERROR
  }
}
export const changeUserProfileModalHide = () => {
  return {
    type: CHANGE_USER_PROFILE_MODAL_HIDE
  }
}
export const changeUserProfileModalShow = () => {
  return {
    type: CHANGE_USER_PROFILE_MODAL_SHOW
  }
}
export const changeUserProfileSetAvatar = (payload) => {
  return {
    type: CHANGE_USER_PROFILE_SET_AVATAR,
    payload
  }
}
export const deleteUserProfileLoader = () => {
  return {
    type: DELETE_USER_PROFILE_LOADER,
  }
}
export const deleteUserProfileSuccess = () => {
  return {
    type: DELETE_USER_PROFILE_SUCCESS
  }
}
export const deleteUserProfileError = () => {
  return {
    type: DELETE_USER_PROFILE_ERROR
  }
}
export const paymentAccountLoader = ({payload}) => {
  return {
    type: PAYMENT_ACCOUNT_LOADER,
    payload
  }
}
export const paymentAccountSuccess = () => {
  return {
    type: PAYMENT_ACCOUNT_SUCCESS
  }
}
export const paymentAccountError = () => {
  return {
    type: PAYMENT_ACCOUNT_ERROR
  }
}
export const paymentAccountModalHide = () => {
  return {
    type: PAYMENT_ACCOUNT_MODAL_HIDE
  }
}
export const paymentAccountModalShow = () => {
  return {
    type: PAYMENT_ACCOUNT_MODAL_SHOW
  }
}
export const createTemplateLoader = ({payload}) => {
  return {
    type: CREATE_TEMPLATE_LOADER,
    payload
  }
}
export const createTemplateSuccess = () => {
  return {
    type: CREATE_TEMPLATE_SUCCESS
  }
}
export const createTemplateError = () => {
  return {
    type: CREATE_TEMPLATE_ERROR
  }
}
export const createTemplateModalHide = () => {
  return {
    type: CREATE_TEMPLATE_MODAL_HIDE
  }
}
export const createTemplateModalShow = () => {
  return {
    type: CREATE_TEMPLATE_MODAL_SHOW
  }
}
export const getTemplateLoader = (id) => {
  return {
    type: GET_TEMPLATE_LOADER,
    id
  }
}
export const getTemplateSuccess = (payload) => {
  return {
    type: GET_TEMPLATE_SUCCESS,
    payload
  }
}
export const getTemplateError = () => {
  return {
    type: GET_TEMPLATE_ERROR
  }
}

export const historyObject = (array, type, value) => {
const date = moment().format('YYYY.MM.DD, HH:mm:ss');
  const newObject = {
    type,
    date,
    value,
    key: date
  }
  if (array) 
    return [ newObject, ...array ];
  return [ newObject ]
}

export const accountHistoryLoader = (id) => {
  return {
    type: ACCOUNT_HISTORY_LOADER,
    id
  }
}
export const accountHistorySuccess = (payload) => {
  return {
    type: ACCOUNT_HISTORY_SUCCESS,
    payload
  }
}
export const accountHistoryError = () => {
  return {
    type: ACCOUNT_HISTORY_ERROR
  }
}
export const accountHistoryFilter = (payload) => {
  return {
    type: ACCOUNT_HISTORY_FILTER,
    payload
  }
}