export const SIGNUP_ISAUTHLOADER = 'SIGNUP_ISAUTHLOADER'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const SIGNUP_SHOW = 'SIGNUP_SHOW'
export const SIGNUP_HIDE = 'SIGNUP_HIDE'
export const LOGIN_ISAUTHLOADER = 'LOGIN_ISAUTHLOADER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_EXISTING = 'LOGIN_EXISTING'
export const LOGOUT = 'LOGOUT'
export const USER_MODERATION_LOADER = 'USER_MODERATION_LOADER'
export const USER_MODERATION_SUCCESS = 'USER_MODERATION_SUCCESS'
export const USER_MODERATION_ERROR = 'USER_MODERATION_ERROR'
export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'


export const signupRequest = ({ Email, First, Password }) => {
  return {
    type: SIGNUP_ISAUTHLOADER,
    Email,
    First,
    Password
  }
}

export const loginRequest = ({ Email, Password }) => {
  return {
    type: LOGIN_ISAUTHLOADER,
    Email,
    Password,
  }
}

export const loginSuccess = ({userId}) => {
  return { 
    type: LOGIN_SUCCESS,
    userId 
  }
}

export const loginError = (error) => {
  return { 
    type: LOGIN_ERROR, 
    error
  }
}

export const signupSuccess = (response) => {
  return { 
    type: SIGNUP_SUCCESS,
    response 
  }
}

export const signupError = (error) => {
  return { 
    type: SIGNUP_ERROR, 
    error
  }
}
export const signupShow = () => {
  return { 
    type: SIGNUP_SHOW, 
  }
}
export const signupHide = () => {
  return { 
    type: SIGNUP_HIDE, 
  }
}
export const userModerationLoader = () => {
  return { 
    type: USER_MODERATION_LOADER, 
  }
}
export const userModerationSuccess = () => {
  return { 
    type: USER_MODERATION_SUCCESS, 
  }
}
export const userModerationError = () => {
  return { 
    type: USER_MODERATION_ERROR, 
  }
}
export const getUser = ({userId}) => {
  return { 
    type: GET_USER, 
    userId
  }
}
export const getUserSuccess = ({email, first, isClient}) => {
  return { 
    type: GET_USER_SUCCESS, 
    email,
    firstName: first,
    isModerated: isClient
  }
}
export const getUserError = () => {
  return { 
    type: GET_USER_ERROR 
  }
}
