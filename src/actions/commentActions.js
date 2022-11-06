import * as PostApi from '../api/CommentRequest'


export const getComment = (id) => async (dispatch) => {
    dispatch({ type: "COMMENT_RETREIVING_START" })
    try {
        const { data } = await PostApi.getComment(id);
        dispatch({ type: "COMMENT_RETREIVING_SUCCESS", data: data })


    } catch (error) {
        dispatch({ type: "COMMENT_RETREIVING_FAIL" })
        console.log(error);
    }
}


