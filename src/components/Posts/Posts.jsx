import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { getTimelinePosts } from "../../actions/postActions";
import Spinner from '../Spinner'

function Posts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  return (
    <div className="Postcard">
      {loading&&<Spinner/>}
      {posts.length>0&&
        posts.map((post) => {
            return <Post data={post} key={post._id} />;
          })}
    </div>
  );
}

export default Posts;
