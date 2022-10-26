import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfileCard.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import { pink } from '@mui/material/colors';

function ProfileCard({ location }) {
  const { user } = useSelector((state) => state.authReducer.authData);

  const { posts } = useSelector((state) => state.postReducer);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt=""
        />
      </div>
      <div className="ProfileName">
        <span>
          {user.firstname} {user.lastname}{" "}
          {user.isAdmin ? (
            <VerifiedIcon sx={{ color: pink[500] }} />
          ) : (
            ""
          )}
        </span>
        <span>{user.worksAt ? user.worksAt : "write about yourself"}</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="Vl"></div>
          <div className="Followers">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="Vl"></div>
              <div className="Follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${user._id}`}
          >
            Profile
          </Link>
        </span>
      )}
    </div>
  );
}

export default ProfileCard;
