import axios from 'axios';

export const loginApiRequest = (email, password) => {
    return axios.post("http://localhost:3051/login", 
    {
        email: email,
        password: password
    })
}
export const signupApiRequest = (email, first, password) => {
    return axios.post("http://localhost:3051/register", 
    {
        email: email,
        password: password,
        first: first,
        isClient: false
    })
}
export const getUserApiRequest = (userId) => {
    return axios.get(`http://localhost:3051/users/${userId}`) 
}
export const setUserModeratedApiRequest = (userId) => {
    return axios.patch(`http://localhost:3051/users/${userId}`,{
        isClient: true
    }) 
}




