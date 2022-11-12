import React from 'react'
import TopNavbar from '../../Components/UserTopbar/UserTopbar'
import BottomAppbar from '../../Components/BottomAppBar/BottomAppBar'
import SavePostTab from '../../Components/SavePost/SavePostTab'
import { ProfileLeft } from '../../Components/ProfileLeft/ProfileLeft'
import RightSide from '../../Components/RightSide/RightSide'
import './Profile.css'
import Card from '../../Components/ProfileCard/ProfileCard'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <> 
    
    
     <TopNavbar />
    <div className='Profile'>
      <ProfileLeft/>
     <div className="ProfileCenter">
        {/* <ProfileCard location ='profilePage'/> */}
        <Card/>
        <SavePostTab/>
     </div> 
     <RightSide/>
    </div>
    <div style={{position: 'fixed',bottom: '0',zIndex: '5' }}>
    <BottomAppbar />
    </div>
    </>
  )
}

export default Profile
