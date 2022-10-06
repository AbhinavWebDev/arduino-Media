import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'



function home() {
  return (
    <div className='Home'>
        <div className="ProfileSide">
            <ProfileSide/>
        </div>
        <div className="PostSide">
            <PostSide/>
        </div>
        <div className="RightSide">
            <RightSide/>
        </div>
        

      
    </div>
  )
}

export default home
