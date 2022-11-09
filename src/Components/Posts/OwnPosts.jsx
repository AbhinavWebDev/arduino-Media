import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { getTimelinePosts } from "../../Redux/Actions/PostActions";

function Posts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  return (
    <div className="Posts">
      {loading
        ? "Fetching Post..."
        : posts.map((post) => {
            if (post.userId === user._id) {
              return <Post data={post} id={post._id} />;
            }
          })}
    </div>
  );
}

export default Posts;
