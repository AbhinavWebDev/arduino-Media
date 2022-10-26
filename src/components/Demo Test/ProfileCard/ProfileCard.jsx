import React from "react";
import "./ProfileCard.scss";
import VerifiedIcon from '@mui/icons-material/Verified';
import IconButton from "@mui/material/IconButton";
import { pink } from '@mui/material/colors';
import { InfoCard } from "../../InfoCard/InfoCard";
import { useSelector } from "react-redux";

function Card(users) {
  const { user } = useSelector((state) => state.authReducer.authData);
  console.log('im user',user);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="card-container">
      <div class="background"></div>

      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo">
              <img style={{width:'100%'}}
                src={
                  user.coverPicture
                    ? serverPublic + user.profilePicture
                    : serverPublic + "defaultCover.jpg"
                }
                alt=""
              />
            </div>
            <div
              class="front__face-photo"
             
            >
              <img style={{width:'100%'}}
                src={
                  user.profilePicture
                    ? serverPublic + user.profilePicture
                    : serverPublic + "defaultProfile.png"
                }
                alt=""
              />
            </div>
            <div class="front__text">
              <h3 class="front__text-header">{user.firstname} <IconButton aria-label="share">
              {user.verify? <VerifiedIcon sx={{ color: pink[500] }} />:''} 
        </IconButton></h3>
              
              <p class="front__text-para">
                <i class="fas fa-map-marker-alt front-icons"></i>
                {user.username}
              </p>
            </div>

            <div className="social-container">
              <div className="followers">
                <h1 className="bold-text">{user.followers.length}</h1>
                <h2 className="smaller-text">Followers</h2>
              </div>
              <div className="likes">
                <h1 className="bold-text">{user.following.length}</h1>
                <h2 className="smaller-text">Following</h2>
              </div>
              <div className="photos">
                <h1 className="bold-text">12</h1>
                <h2 className="smaller-text">Photos</h2>
              </div>
            </div>
          </div>
          <div class="back">
          <InfoCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
