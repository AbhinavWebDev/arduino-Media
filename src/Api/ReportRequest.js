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

export const getReport = (id) => API.get(`/post/Report/${id}`);
export const createReport = (data) => API.put("/post/report", data);
