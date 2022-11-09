import * as PostApi from "../../Api/PostRequest";
import * as UploadApi from "../../Api/UploadRequest";

export const uploadImage = (data) => async (dispatch) => {
  try {
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETREIVING_FAIL" });
    console.log(error);
  }
};

export const getlikeList = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_LIKELIST_START" });
  try {
    const { data } = await PostApi.getlikeList(id);
    dispatch({ type: "RETREIVING_LIKELIST_SUCCESS", data: data, id: id });
  } catch (error) {
    dispatch({ type: "RETREIVING_LIKELIST_FAIL" });
    console.log(error);
  }
};



export const getSavedPosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_SAVED_POST_START" });
  try {
    const { data } = await PostApi.getSavedPosts(id);
    dispatch({ type: "RETREIVING_SAVED_POST_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RRETREIVING_SAVED_POST_FAIL" });
    console.log(error);
  }
};
