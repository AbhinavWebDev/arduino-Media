import React, { useState, useRef } from "react";
import "../PostShare/PostShare.css";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/postActions";
import { updatePost } from "../../api/PostRequest";

function CommentShare({Post,setOpenEdit}) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [formDesc,setFormDesc]=useState(Post.desc)
  const [formLocation,setFormLocation]=useState(Post.location)

  const desc = useRef();
  const location = useRef();
 

  const reset = () => {
    dispatch(getTimelinePosts(user._id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      postId:Post._id,
      userId: user._id,
      desc: desc.current.value,
      location: location.current.value,
    };

    updatePost(newPost);
   
    setTimeout(function() { reset() }, 1000);
    reset()
    setOpenEdit(false)
  };
  return (
    <div className="PostUpdate">
      
      <div>
        <p>Desc</p>
        <input ref={desc} required type="text" value={formDesc}
        onChange={(e) => setFormDesc(e.target.value)} />
         <p>Location</p>
        <input ref={location} required type="text" value={formLocation}
        onChange={(e) => setFormLocation(e.target.value)} />
        
        <button
              className="button ps-button"
              onClick={handleSubmit}
            >
               Share
            </button>
      </div>
    </div>
  );
}

export default CommentShare;
