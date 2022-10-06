import React from "react";
import Cover from "../../img/Cover_Abhinav.webp";
import Profile from "../../img/Profile.jpg";
import "./ProfileCard.css";

function ProfileCard() {
  const ProfilePage = false;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Abhinav A</span>
        <span>Web Developer</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>55</span>
            <span>Following</span>
          </div>
          <div className="Vl"></div>
          <div className="Followers">
            <span>100k</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="Vl"></div>
              <div className="Follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>Profile</span>}
      
    </div>
  );
}

export default ProfileCard;
