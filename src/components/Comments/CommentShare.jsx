import React, { useState, useRef } from "react";
import ProfileImage from "../../img/Profile.jpg";
import "../PostShare/PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { createComment} from "../../actions/uploadAction";
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from "@mui/material";
import { getComment } from "../../actions/commentActions";


function CommentShare({PostID,fetchComment}) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const comment = useRef();
 

  const reset = () => {
    comment.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      postID: PostID,
      userId: user._id,
      firstName: user.firstName,
      profilePicture: user.profilePicture,
      comment: comment.current.value,
    };

    dispatch(createComment(newPost));
    fetchComment();
    reset();
  };
  return (
    <div style={{display:'flex'}} className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt=""
      />
      <div >
      
        <input ref={comment} required type="text" placeholder="Write a comment..."  />
        <Avatar  onClick={handleSubmit} ><SendIcon/></Avatar>
        
       
            
             
      </div>
    </div>
  );
}

export default CommentShare;
