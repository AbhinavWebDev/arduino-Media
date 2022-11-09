import axios from "axios"

const API = axios.create({ baseURL: `${ process.env.REACT_APP_BACKEND_URL }` });

export const getMessages = (id) => API.get(`/messages/${id}`)
export const addMessage = (data) => API.post('/messages/', data)
