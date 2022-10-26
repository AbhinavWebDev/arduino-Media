import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import Navbar from '../../components/Navbar/Navbar'
import Chatlist from '../../components/Demo Test/Chatlist'
import LeftChat from '../../components/ProfileSide/ProfileSide'



function home() {
  return (
    <>
    <div style={{position: 'fixed',bottom: '0',zIndex: '5' }}>
    <Navbar />
    </div>

    {/* <ClippedDrawer/> */}
   
          <LogoSearch />
   
    <div className='Home'>
      
        <div className="ProfileSide">
            <Chatlist/>
        </div>
        <div className="PostSide">
            <PostSide/>
        </div>
        <div className="RightSide">
            <RightSide/>
        </div>

        
        

      
    </div>
  
        
      
    </>
  )
}

export default home
