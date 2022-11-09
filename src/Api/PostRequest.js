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

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) =>API.put(`/post/${id}/like`, { userId: userId });
export const reportPost = (id, userId) =>API.put(`/post/${id}/report`, { userId: userId });
export const savePost = (id, userId) =>API.put(`/post/${id}/save`, { userId: userId });
export const deletePost = (id, userId) => {API.delete(`/post/${id}/delete`, { userId: userId });};
export const getlikeList = (Id) => API.get(`/post/${Id}/like/user`);
export const updatePost = (data) => API.put("/post", data);
export const getSavedPosts = (id) => API.get(`/post/${id}/savedpost`);

