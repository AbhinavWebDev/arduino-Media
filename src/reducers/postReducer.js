const defaultState = require('../store/state.json')
const postReducer = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case "UPLOAD_START":
            return { ...state, uploading: true, error: false }
        case "UPLOAD_SUCCESS":
          
            return {
                ...state, posts: [action.data, ...state.posts],
                uploading: false, error: false
            }
        case "UPLOAD_FAIL":
            return { ...state, uploading: false, error: true }



        case "RETREIVING_START":
            return { ...state, loading: true, error: false }
        case "RETREIVING_SUCCESS":
          
            return {
                ...state, posts:action.data,
                loading: false, error: false
            }

        case "RETREIVING_FAIL":
            return { ...state, loading: false, error: true }



            case "STORY_RETREIVING_START":
            return { ...state, loading: true, error: false }
        case "STORY_RETREIVING_SUCCESS":
          
            return {
                ...state, story:action.data,
                loading: false, error: false
            }

        case "STORY_RETREIVING_FAIL":
            return { ...state, loading: false, error: true }

            case "RETREIVING_LIKELIST_START":
                return state 
            case "RETREIVING_LIKELIST_SUCCESS":
              let index=state.posts.findIndex(item=>item._id=action.id)
              let posts=state.posts
              posts[index]={...posts[index],likelist:action.data}
                return {
                    ...state, posts,
                     error: false
                }
    
            case "RETREIVING_LIKELIST_FAIL":
                return state 
        default: return state

    }

    
}

export default postReducer