import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../Redux/Actions/UserAction";
import verified from "../../Images/Verified.png";

function User({ person }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));

    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div>
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

          <span>{person.username}</span>
        </div>
      </div>
      {person._id === user._id ? (
        ""
      ) : (
        <button
          className={
            following ? "button fc-button unfollowButton" : "button fc-button"
          }
          onClick={handleFollow}
        >
          {following ? "unfollow" : "follow"}
        </button>
      )}
    </div>
  );
}

export default User;
