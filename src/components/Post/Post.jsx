import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <div className="author">
        <img src={data.Logo} alt="" className="authorImage" />
        <div className="name">
          <span>{data.author}</span>
        </div>
      </div>
      <img src={data.img} alt="" />
      <div className="PostReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{ color: "var(--grey)", fontSize: "20px" }}>
        {data.likes} likes
      </span>
      <div className="detial">
        <span>
          <b>{data.name}</b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
