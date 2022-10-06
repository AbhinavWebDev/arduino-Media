import React from 'react'
import { InfoCard } from '../../components/InfoCard/InfoCard'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { ProfileLeft } from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft/>
     <div className="ProfileCenter">
        <ProfileCard/>
        <div className='infoCard'>
        <InfoCard/>
        </div>
        
        <PostSide/>
     </div>
     <RightSide/>
    </div>
  )
}

export default Profile
