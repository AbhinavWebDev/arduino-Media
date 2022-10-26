import React from "react";
import Posts from "../Posts/Posts";

import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

function PostSide() {
  return (
    <div className="PostSide">
      
      <div className="PostShar">
        <PostShare />
      </div>
      <div className="PostCard">
      <Posts />
      </div>
      
    </div>
  );
}

export default PostSide;
