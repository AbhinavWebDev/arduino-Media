import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

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

export const getStory = (id) => API.get(`/story/${id}/story`);
export const uploadStory = (data) => API.post("/story", data);
