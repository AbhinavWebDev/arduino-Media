import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import FollowersCard from "../FollowersCard/FollowersCard";
import { Link } from "react-router-dom";
function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      

      <FollowersCard />

    
     
    </div>
  );
}

export default RightSide;
