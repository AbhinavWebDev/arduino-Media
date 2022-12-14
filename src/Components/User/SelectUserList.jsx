import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../../Redux/Actions/ChatAction";
import { followUser, unFollowUser } from "../../Redux/Actions/UserAction";
import defaultProfile from "../../Images/Default_DP.jpg";


function SelectUSerList({ person }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const newChat = {
    senderId: user._id,
    receiverId: person._id,
  };
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleCreateChat = () => {
    dispatch(createChat(newChat));

    // setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div onClick={handleCreateChat}>
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : defaultProfile
          }
          alt=""
          className="followerImage"
        />
        <div className="name">
          <span>
            {person.firstName} {person.lastName}{" "}
            {person.verify ? (
            ''
            ) : (
              ""
            )}
          </span>

          <span>{person.about}</span>
        </div>
      </div>
    </div>
  );
}

export default SelectUSerList;
