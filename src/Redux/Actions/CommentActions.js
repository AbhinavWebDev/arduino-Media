import * as CommentApi from "../../Api/CommentRequest";

export const getComment = (id) => async (dispatch) => {
  dispatch({ type: "COMMENT_RETREIVING_START" });
  try {
    const { data } = await CommentApi.getComment(id);
    dispatch({ type: "COMMENT_RETREIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "COMMENT_RETREIVING_FAIL" });
    console.log(error);
  }
};

export const createComment = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_Comment_START" });
  try {
    const newComment = await CommentApi.createComment(data);
    dispatch({ type: "UPLOAD_Comment_SUCCESS", data: newComment.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_Comment_FAIL" });
  }
};
