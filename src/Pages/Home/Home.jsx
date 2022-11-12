import React from 'react'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
import PostSide from '../../Components/PostSide/PostSide'
import RightSide from '../../Components/RightSide/RightSide'
import './Home.css'
import UserTopbar from '../../Components/UserTopbar/UserTopbar'
import Chatlist from '../../Components/ChatList/Chatlist'
import LeftChat from '../../Components/ProfileSide/ProfileSide'
import FollowersCard from '../../Components/FollowersCard/FollowersCard'
import BottomAppBar from '../../Components/BottomAppBar/BottomAppBar'



function home() {
  return (
    <>
    
   
          <UserTopbar />
   
    <div className='Home'>
      
        <div className="ProfileSide">
            <Chatlist/>
        </div>
        <div className="PostSide">
            <PostSide/>
        </div>
        <div className="RightSide">
        <FollowersCard />
        </div>

        
        

      
    </div>
  
    <div >
    <BottomAppBar />
    </div>
      
    </>
  )
}

export default home
