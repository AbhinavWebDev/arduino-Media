import React from "react";
import Posts from "../Posts/Posts";
import OwnPosts from "../Posts/OwnPosts";

import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

function PostSide() {
  return (
    <div className="PostSide">
     
      <OwnPosts />
    </div>
  );
}

export default PostSide;
