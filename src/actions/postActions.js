import * as PostApi from '../api/PostRequest'


export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" })
    try {
        const { data } = await PostApi.getTimelinePosts(id);
        dispatch({ type: "RETREIVING_SUCCESS", data: data })


    } catch (error) {
        dispatch({ type: "RETREIVING_FAIL" })
        console.log(error);
    }
}



export const getlikeList = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_LIKELIST_START" })
    try {
        const { data } = await PostApi.getlikeList(id);
        dispatch({ type: "RETREIVING_LIKELIST_SUCCESS", data: data, id: id })


    } catch (error) {
        dispatch({ type: "RETREIVING_LIKELIST_FAIL" })
        console.log(error);
    }
}