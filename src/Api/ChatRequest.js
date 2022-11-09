import axios from "axios";

// const API = axios.create(`${ process.env.REACT_APP_BACKEND_URL }`);
const API = axios.create({ baseURL: `${ process.env.REACT_APP_BACKEND_URL }` });
export const userChats = (id) => API.get(`/chat/${id}`);
export const CreateChat = (data) => API.post(`/chat`, data);
