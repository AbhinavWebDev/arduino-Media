import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
    console.log('ewwer', req);
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
}, (error) => {
    console.log("int error", error);
})

export const uploadImage = (data) => API.post('/upload', data)

export const uploadPost = (data) => API.post('/post', data)