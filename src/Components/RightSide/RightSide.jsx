import React, { useState } from "react";
import "./RightSide.css";
import { UilSetting } from "@iconscout/react-unicons";
import FollowersCard from "../FollowersCard/FollowersCard";
import { Link } from "react-router-dom";
function RightSide() {
  return (
    <div className="RightSide">
      

      <FollowersCard />

    
     
    </div>
  );
}

export default RightSide;
