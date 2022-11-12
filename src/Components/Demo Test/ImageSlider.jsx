import React from "react";
// import "./Top5Post.scss";
import VerifiedIcon from "@mui/icons-material/Verified";
import IconButton from "@mui/material/IconButton";
import { pink } from "@mui/material/colors";
// import { InfoCard } from "../../InfoCard/InfoCard";
import { useSelector } from "react-redux";
import { InfoCard } from "../InfoCard/InfoCard";
import { Avatar, CardHeader } from "@mui/material";
import defaultProfile from '../../Images/Default_DP.jpg'

function ImageSlider(data) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts } = useSelector((state) => state.postReducer);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="card-container">
      <div class="background"></div>

      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
          <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
           <img style={{width: '2.5rem',height: '2.5rem'}} src={
          data.data.profilePicture
            ? serverPublic + data.data.profilePicture
            : defaultProfile
        } alt="" />
          </Avatar>
        }
        
        title={data.data.firstName}
        subheader={data.data.location}
      />
            <div class="front__bkg-photo">
              <img
                style={{ width: "100%" }}
                src={
                  data.data.image
                    ? serverPublic + data.data.image
                    : serverPublic + "defaultCover.jpg"
                }
                alt=""
              />
            </div>
           
            
            

            <div className="social-container">
              <div className="followers">
                <h1 className="bold-text">{data.data.likes.length}</h1>
                <h2 className="smaller-text">Likes</h2>
              </div>
              <div className="likes">
                <h1 className="bold-text">6</h1>
                <h2 className="smaller-text">Comments</h2>
              </div>
              <div className="photos">
                <h1 className="bold-text">
                {data.data.Save.length}
                
                </h1>
                <h2 className="smaller-text">Save</h2>
              </div>
            </div>
          </div>
          <div class="back"><InfoCard/></div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
