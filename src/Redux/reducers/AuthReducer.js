const defaultState = require("../Store/state.json");
const authReducer = (state = defaultState, action) => {
  switch (action.type) {

    case "LOGIN_START":
      return { ...state, error: false };
    case "LOGIN_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        isAdmin: action.data.user.isAdmin,
        loading: false,
        error: false,
      };

    case "LOGIN_FAIL":
      return { ...state, loading: false, error: true };


    case "SIGNUP_AUTH_START":
      return { ...state, error: false };
    case "SIGNUP_AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        activeData: action.data,
        dataExist: false,
        Otpsend: true,
        error: false,
      };
    case "SIGNUP_AUTH_FAIL":
      return { ...state, error: true, dataExist: true };

    case "OTP_VERIFY_START":
      return { ...state, error: false };
    case "OTP_VERIFY_SUCCESS":
      return { ...state, Otpsend: false, Otpverify: true, error: false };
    case "OTP_VERIFY_FAIL":
      return { ...state, Otpverify: false, error: true };

    case "SIGNUP_AUTHOK_START":
      return { ...state, error: false };
    case "SIGNUP_AUTHOK_SUCCESS":
      localStorage.clear();
      return { ...state, error: false };
    case "SIGNUP_AUTHOK_FAIL":
      return { ...state, error: true, dataExist: true };

    
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, loading: false, error: false };
    default:
      return state;
  }
};

export default authReducer;
