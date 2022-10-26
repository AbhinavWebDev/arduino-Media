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
      return { ...state, authData: action.data, loading: false, error: false }
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true }

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
        return {...state,authData:{...state.authData,user:{...state.authData.user,following:[...state.authData.user.following.filter((personId)=>personId!==action.data)]}}}

    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, loading: false, error: false }
    default:
      return state;
  }
};

export default authReducer;
