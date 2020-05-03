import axios from 'axios';

export const loginApiRequest = (email, password) => {
    return axios.post("http://localhost:3051/login", 
    {
        email,
        password
    })
}
export const signupApiRequest = (email, first, password) => {
    return axios.post("http://localhost:3051/register", 
    {
        email,
        password,
        first,
        isClient: false,
        img: null
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




