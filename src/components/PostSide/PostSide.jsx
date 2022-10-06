import React from 'react'
import Navbar from '../Navbar/Navbar'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'

function PostSide() {
  return (
  <div className="PostSide">
    <div className="Navbar">
    <Navbar/>
    </div>
    <div className="PostShar">
    <PostShare/>
    </div>
  
   <Posts/>

   
  </div>
  )
}

export default PostSide