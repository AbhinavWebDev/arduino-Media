import React from "react";
import Posts from "../Posts/Posts";

import PostShare from "../PostShare/PostShare";
import AddStory from "../Story/AddStory";
import StoryBody from "../Story/StoryBody";
import "./PostSide.css";

function PostSide() {
  return (
    <div className="PostSide">
      <div>

        <StoryBody/></div>
      <div className="PostCard">
      <Posts />
      </div>
      
    </div>
  );
}

export default PostSide;
