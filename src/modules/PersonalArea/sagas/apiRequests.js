import axios from 'axios';

export const accountsListRequest = (userId) => {
    return axios.get(`http://localhost:3051/users/${userId}/accounts`)
}
export const newAccountRequest = (userId, id, account_number) => {
    return axios.post(`http://localhost:3051/accounts`,{
        userId,
        account_balance: 0,
        account_number,
        id
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
