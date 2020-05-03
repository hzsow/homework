import axios from 'axios';

export const accountsListRequest = (userId) => {
    return axios.get(`http://localhost:3051/users/${userId}/accounts`)
}
export const newAccountRequest = (userId, id, account_number) => {
    return axios.post(`http://localhost:3051/accounts`,{
        userId,
        account_balance: 0,
        account_number,
        id: account_number
    })
}
export const deleteAccountRequest = (id) => {
    return axios.delete(`http://localhost:3051/accounts/${id}`)
}
export const replenishAccountRequest = (id, value) => {
    return axios.patch(`http://localhost:3051/accounts/${id}`,{
        account_balance: value
    })
}
export const getAccountsRequest = () => {
    return axios.get(`http://localhost:3051/accounts/`)
}
export const transferAccountRequest = (account_number, value) => {
    return axios.patch(`http://localhost:3051/accounts/${account_number}`,{
        account_balance: value 
    });
}
export const setHistoryRequest = (id, values) => {
    return axios.patch(`http://localhost:3051/history/${id}`, {
        data: values 
    });
}
export const setNewHistoryRequest = (id) => {
    return axios.post(`http://localhost:3051/history`, {
        id,
        data: null 
    });
}
export const deleteHistoryRequest = (id) => {
    return axios.delete(`http://localhost:3051/history/${id}`);
}
export const getHistoryRequest = (id) => {
    return axios.get(`http://localhost:3051/history/${id}`)
}

export const changeUserPasswordRequest = (userId, password) => {
    return axios.patch(`http://localhost:3051/users/${userId}`, 
    {
        password,
    })
}
export const changeUserProfileRequest = (userId, email, first, img) => {
    return axios.patch(`http://localhost:3051/users/${userId}`, 
    {
        email,
        first,
        img
    })
}
export const loginApiRequest = (email, password) => {
    return axios.post("http://localhost:3051/login", 
    {
        email,
        password
    })
}
export const deleteUserProfileRequest = (userId) => {
    return axios.delete(`http://localhost:3051/users/${userId}`)
}
export const createTemplateRequest = (id, values) => {
    return axios.post(`http://localhost:3051/templates`,{
        ...values,
        id
    })
}
export const getTemplateRequest = (id) => {
    return axios.get(`http://localhost:3051/templates/${id}`)
}
export const changeTemplateRequest = (id, values) => {
    return axios.patch(`http://localhost:3051/templates/${id}`,{
        ...values
    })
}