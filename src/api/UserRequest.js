import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })


API.interceptors.request.use((req) => {

    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
}, (error) => {
    console.log("int error", error);
})


export const getUser = (userId) => API.get(`/user/${userId}`)

export const updateUser = (id, formData) => API.put(`/user/${id}`, formData)

export const getAllUser = () => API.get('/user')

export const getTopUser = () => API.get('/user/top')

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data)

export const unFollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data)

export const blockUser = (id) => API.put(`/user/${id}/block`)

export const unBlockUser = (id) => API.put(`/user/${id}/unblock`)

export const verifyUser = (id) => API.put(`/user/${id}/verify`)

export const unVerifyUser = (id) => API.put(`/user/${id}/unverify`)

export const deleteUser = (userId) => API.delete(`/user/${userId}`)

