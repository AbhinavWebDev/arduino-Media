import axios from "axios";

const API = axios.create({ baseURL: `${ process.env.REACT_APP_BACKEND_URL }` });

API.interceptors.request.use(
  (req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
  },
  (error) => {
    console.log("int error", error);
  }
);

export const getComment = (id) => API.get(`/comment/${id}`);
export const createComment = (data) => API.post("/comment", data);
