import axios from "axios";
// const API = axios.create(`${ process.env.REACT_APP_BACKEND_URL }`);
const API = axios.create({ baseURL: `${ process.env.REACT_APP_BACKEND_URL }` });

export const logIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
export const otpVerify = (otp) => API.post("/auth/otpVerify", otp);
export const signUpok = (formData) => API.post("/auth/registerok", formData);
