import * as UserApi from "../api/UserRequest"

export const updateUser = (formData) => async (dispatch) => {

    dispatch({ type: "UPDATING_START" })

    try {
        const { data } = await UserApi.updateUser(formData);
        dispatch({ type: "UPDATING_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "UPDATING_FAIL" })

    }
}


export const followUser = (id, data) => async (dispatch) => {
    dispatch({ type: "FOLLOW_USER" })
    UserApi.followUser(id, data)
}

export const unFollowUser = (id, data) => async (dispatch) => {
    dispatch({ type: "UNFOLLOW_USER" })
    UserApi.unFollowUser(id, data)
}

export const blockUser = (id) => async (dispatch) => {
    dispatch({ type: "BLOCK_USER" })
    UserApi.blockUser(id)
}

export const unBlockUser = (id) => async (dispatch) => {
    dispatch({ type: "UNBLOCK_USER" })
    UserApi.unBlockUser(id)
}

export const verifyUser = (id) => async (dispatch) => {
    dispatch({ type: "VERIFY_USER" })
    UserApi.verifyUser(id)
}

export const unVerifyUser = (id) => async (dispatch) => {
    dispatch({ type: "UNVERIFY_USER" })
    UserApi.unVerifyUser(id)
}

export const deleteUser = (id) => async (dispatch) => {

    dispatch({ type: "DELETE_USER_START" })

    try {
        const { data } = await UserApi.deleteUser(id)
        dispatch({ type: "DELETE_USER_SUCCESS"})
    } catch (error) {
        dispatch({ type: "DELETE_USER_FAIL" })

    }
}