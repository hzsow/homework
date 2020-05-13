import axios from 'axios';

export const loginApiRequest = (Email, Password) => {
    return axios.post("/login", 
    {
        Email,
        Password
    })
}
export const signupApiRequest = (Email, FirstName, Password) => {
    return axios.post("/register", 
    {
        Email,
        Password,
        FirstName
    })
}
export const getUserApiRequest = (userId) => {
    return axios.get(`/getUser/${userId}`) 
}
export const setUserModeratedApiRequest = (userId) => {
    return axios.get(`/makeClient/${userId}`)
}




