import * as ChatApi from '../api/ChatRequest'


export const createChat = (data) => async (dispatch) => {
    dispatch({ type: "CREATE_CHAT_START" })
    try {
        const newChat = await ChatApi.CreateChat(data)
        dispatch({ type: "CREATE_CHAT_SUCCESS", data: newChat.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "CREATE_CHAT_FAIL" })
    }
}