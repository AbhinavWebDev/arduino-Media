const defaultState = require('../store/state.json')
const authReducer = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, error: false }
    case "AUTH_SUCCESS":

      localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
      console.log('isAdmin',action.data.user.isAdmin);
      return { ...state, authData: action.data,isAdmin:action.data.user.isAdmin, loading: false, error: false }
      
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true }

      case "SIGNUP_AUTH_START":
        return { ...state, error: false }
      case "SIGNUP_AUTH_SUCCESS":
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
        return { ...state,activeData: action.data, dataExist:false,Otpsend:true, error: false }
      case "SIGNUP_AUTH_FAIL":
        return { ...state, error: true,dataExist:true }


        



        case "OTP_VERIFY_START":
          return { ...state, error: false }
        case "OTP_VERIFY_SUCCESS":
          return { ...state, Otpsend:false,Otpverify:true, error: false }
        case "OTP_VERIFY_FAIL":
          return { ...state,Otpverify:false, error: true }

          case "SIGNUP_AUTHOK_START":
            return { ...state, error: false }
          case "SIGNUP_AUTHOK_SUCCESS":
            localStorage.clear();
            return { ...state, error: false }
          case "SIGNUP_AUTHOK_FAIL":
            return { ...state, error: true,dataExist:true }

case "UPDATING_START":
  return {...state,upLoading:true,error:false}

  case "UPDATING_SUCCESS":
    localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
    return {...state,authData:action.data,upLoading:false,error:false}

    case "UPDATING_FAIL":
      return{...state,upLoading:false,error:true}


      case "FOLLOW_USER":
        return {...state,authData:{...state.authData,user:{...state.authData.user,following:[...state.authData.user.following,action.data]}}}

        case "UNFOLLOW_USER":
        return {...state,authData:{...state.authData,user:{...state.authData.user,following:[...state.authData.user.following]}}}


        case "DELETE_USER_START":
      return { ...state,deleteuser:false, error: false }
    case "DELETE_USER_SUCCESS":

      return { ...state,deleteuser:true, error: false }
    case "DELETE_USER_FAIL":
      return { ...state,deleteuser:false, loading: false, error: true }

    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, loading: false, error: false }
    default:
      return state;
  }
};

export default authReducer;
