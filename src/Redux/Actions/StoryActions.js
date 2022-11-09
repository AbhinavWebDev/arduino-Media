import * as PostApi from "../../Api/StoryRequest";

export const getStory = (id) => async (dispatch) => {
  dispatch({ type: "STORY_RETREIVING_START" });
  try {
    const { data } = await PostApi.getStory(id);
    dispatch({ type: "STORY_RETREIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "STORY_RETREIVING_FAIL" });
    console.log(error);
  }
};

export const uploadStory = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_STORY_START" });
  try {
    const newStory = await PostApi.uploadStory(data);
    dispatch({ type: "UPLOAD_STORY_SUCCESS", data: newStory.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_STORY_FAIL" });
  }
};
