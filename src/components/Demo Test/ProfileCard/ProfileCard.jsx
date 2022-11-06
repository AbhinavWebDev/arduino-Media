import React,{ useState } from "react";
import "./ProfileCard.scss";
import VerifiedIcon from '@mui/icons-material/Verified';
import IconButton from "@mui/material/IconButton";
import { pink } from '@mui/material/colors';
import { InfoCard } from "../../InfoCard/InfoCard";
import { useSelector } from "react-redux";
import FollowersListModal from "../../LikeModal/followersListModal";
import FollowingList from "../../LikeModal/followingListModal";

function Card({Top5User,page}) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts } = useSelector((state) => state.postReducer);
  const [modalFollowers, setModalFollowers] = useState(false);
  const [modalFollowing, setModalFollowing] = useState(false);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const listName=true;
  let cureentuser=''
  {page==='Top5User'?cureentuser=Top5User:cureentuser=user}
 
  return (
    <div className="card-container">
      <div class="background"></div>

      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo">
              <img style={{width:'100%'}}
                src={
                  cureentuser.coverPicture
                    ? serverPublic + cureentuser.coverPicture
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
                  cureentuser.profilePicture
                    ? serverPublic + cureentuser.profilePicture
                    : serverPublic + "defaultProfile.png"
                }
                alt=""
              />
            </div>
            <div class="front__text">
              <h3 class="front__text-header">{cureentuser.firstName} {cureentuser.lastName} <IconButton aria-label="share">
              {cureentuser.verify? <VerifiedIcon sx={{ color: pink[500] }} />:''} 
        </IconButton></h3>
              
              <p class="front__text-para">
                <i class="fas fa-map-marker-alt front-icons"></i>
                {cureentuser.username}
              </p>
            </div>

            <div  className="social-container">
              <div onClick={() => setModalFollowers(true)} className="followers">
                <h1 className="bold-text">{cureentuser.followers.length}</h1>
                <h2 className="smaller-text">Followers</h2>
              </div>
              <div onClick={() => setModalFollowing(true)} className="likes">
                <h1 className="bold-text">{cureentuser.following.length}</h1>
                <h2 className="smaller-text">Following</h2>
              </div>
              <div className="photos">
                <h1 className="bold-text"> {posts.filter((post) => post.userId === user._id).length}</h1>
                <h2 className="smaller-text">Photos</h2>
              </div>
            </div>
          </div>
          
          <div class="back">
          <InfoCard/>
          </div>
        </div>
      </div>
      <FollowersListModal
        modalOpened={modalFollowers}
         setModalOpened={setModalFollowers}
      ProfileId={cureentuser._id}
      />
      <FollowingList
        modalOpened={modalFollowing}
         setModalOpened={setModalFollowing}
      ProfileId={cureentuser._id}
      />
  
    </div>
    
  );
}

export default Card;
