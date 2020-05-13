import axios from 'axios';


export const accountsListRequest = (userId) => {
    return axios.get(`api/AccountsModels/${userId}`,{})
}
export const newAccountRequest = (userId) => {
    return axios.post(`api/AccountsModels/`,{
        userId 
    })
}
export const deleteAccountRequest = (id) => {
    return axios.delete(`api/AccountsModels/${id}`)
}
export const replenishAccountRequest = (AccountNumber, Value) => {
    return axios.post(`api/ReplenishAccounts/`,{
        AccountNumber,
        Value
    })
}
export const transferAccountRequest = (AccountNumberCurrent, AccountNumberReceiver, Value) => {
    return axios.post(`api/TransferAccounts/`,{
        AccountNumberCurrent,
        AccountNumberReceiver,
        Value 
    });
}
export const paymentAccountRequest = (AccountNumberCurrent, AccountNumberReceiver, Value, UseTemplate) => {
    return axios.post(`api/PaymentAccounts`,{
        AccountNumberCurrent,
        AccountNumberReceiver,
        Value,
        UseTemplate 
    });
}
export const changeUserPasswordRequest = (email, oldPassword, newPassword) => {
    return axios.post(`changePassword`, 
    {
        email,
        oldPassword,
        newPassword
    })
}
export const changeUserProfileRequest = (oldEmail, newEmail, password, firstName, fileName) => {
    return axios.post( `updateUser`,
    {
        oldEmail,
        newEmail,
        password,
        firstName,
        fileName
    })
}
export const deleteUserProfileRequest = (userId) => {
    return axios.delete(`deleteUser/${userId}`)
}
export const createTemplateRequest = (values) => {
    return axios.post(`api/TemplatesModels/`,{
        ...values
    })
}
export const getTemplateRequest = (id) => {
    return axios.get(`api/TemplatesModels/${id}`)
}
export const changeTemplateRequest = (id, values) => {
    return axios.put(`api/TemplatesModels/${id}`,{
        ...values
    })
}
export const getHistoryRequest = (id) =>{
    return axios.get(`api/HistoryModels/${id}`)
}