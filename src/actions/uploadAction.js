import * as UploadApi from '../api/uploadRequest'

export const uploadImage = (data) => async (dispatch) => {
    try {
        await UploadApi.uploadImage(data)
    }
    catch (error) {
        console.log(error);
    }
}

export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" })
    try {
        const newPost = await UploadApi.uploadPost(data)
        dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPLOAD_FAIL" })
    }
}






export const createComment = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_Comment_START" })
    try {
        const newComment = await UploadApi.createComment(data)
        dispatch({ type: "UPLOAD_Comment_SUCCESS", data: newComment.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPLOAD_Comment_FAIL" })
    }
}


export const uploadStory = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_STORY_START" })
    try {
        const newStory = await UploadApi.uploadStory(data)
        dispatch({ type: "UPLOAD_STORY_SUCCESS", data: newStory.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPLOAD_STORY_FAIL" })
    }
}