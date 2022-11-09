// const defaultState = require("../Store/state.json");
// const userReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "UPDATING_START":
//       return { ...state, upLoading: true, error: false };

//     case "UPDATING_SUCCESS":
//       localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
//       return {
//         ...state,
//         authData: action.data,
//         upLoading: false,
//         error: false,
//       };

//     case "UPDATING_FAIL":
//       return { ...state, upLoading: false, error: true };

//     case "FOLLOW_USER":
//       return {
//         ...state,
//         authData: {
//           ...state.authData,
//           user: {
//             ...state.authData.user,
//             following: [...state.authData.user.following, action.data],
//           },
//         },
//       };

//     case "UNFOLLOW_USER":
//       return {
//         ...state,
//         authData: {
//           ...state.authData,
//           user: {
//             ...state.authData.user,
//             following: [...state.authData.user.following],
//           },
//         },
//       };

//     case "DELETE_USER_START":
//       return { ...state, deleteuser: false, error: false };
//     case "DELETE_USER_SUCCESS":
//       return { ...state, deleteuser: true, error: false };
//     case "DELETE_USER_FAIL":
//       return { ...state, deleteuser: false, loading: false, error: true };
//   }
// };

// export default userReducer;
