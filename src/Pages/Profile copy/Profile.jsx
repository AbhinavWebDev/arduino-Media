import React from 'react'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../Components/profileCard/ProfileCard'
import PostSide from '../../Components/postSide/PostSide'
import './Profile.css'
import RightSide from '../../Components/RightSide/RightSide'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard location = 'profilePage'/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile