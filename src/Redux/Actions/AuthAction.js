import * as AuthApi from "../../Api/AuthRequest";
import OTP from "../../Components/OtpInput/Otp";
import Login from "../../Pages/Auth/LoginPage";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "LOGIN_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGIN_FAIL" });
    
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "SIGNUP_AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "SIGNUP_AUTH_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "SIGNUP_AUTH_FAIL" });
  }
};

export const otpVerify = (otp) => async (dispatch) => {
  dispatch({ type: "OTP_VERIFY_START" });
  try {
    const { data } = await AuthApi.otpVerify(otp);

    dispatch({ type: "OTP_VERIFY_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "OTP_VERIFY_FAIL" });
  }
};

export const signUpok = (formData) => async (dispatch) => {
  dispatch({ type: "SIGNUPOK_AUTH_START" });
  try {
    const { data } = await AuthApi.signUpok(formData);
    dispatch({ type: "SIGNUPOK_AUTH_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "SIGNUPOK_AUTH_FAIL" });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
