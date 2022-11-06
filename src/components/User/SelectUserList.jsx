import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../../actions/ChatAction";
import { followUser, unFollowUser } from "../../actions/userAction";
import verified from "../../img/Verified.png";

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
    console.log("here ok");

    // setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div onClick={handleCreateChat}>
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt=""
          className="followerImage"
        />
        <div className="name">
          <span>
            {person.firstName} {person.lastName}{" "}
            {person.verify ? (
              <img style={{ width: "10%" }} src={verified} alt="" />
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
