import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";

import { useState } from "react";
import { getSavedPosts } from "../../Api/PostRequest";

function SavedPost() {
  const [posts, setPost] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
 const loading=false
console.log('postsss',posts);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await getSavedPosts(user._id);
      setPost(data);
    };
    fetchPost();
  }, []);

  return (
    <div className="Posts">
      {loading
        ? "Fetching Post..."
        : posts.map((post) => {
           
              return <Post data={post} id={post._id} />;
            }
          )}
    </div>
  );
}

export default SavedPost;
