import React from 'react'
import { InfoCard } from '../../components/InfoCard/InfoCard'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import Navbar from '../../components/Navbar/Navbar'
import SavePostTab from '../../components/Demo Test/SavePostTab'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { ProfileLeft } from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
import Card from '../../components/Demo Test/ProfileCard/ProfileCard'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <> 
    <div style={{position: 'fixed',bottom: '0',zIndex: '5' }}>
    <Navbar />
    </div>
    
     <LogoSearch />
    <div className='Profile'>
      <ProfileLeft/>
     <div className="ProfileCenter">
        {/* <ProfileCard location ='profilePage'/> */}
        <Card/>
        <SavePostTab/>
     </div> 
     <RightSide/>
    </div>
    </>
  )
}

export default Profile
