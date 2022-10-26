import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'


import Top5Post from '../../components/Demo Test/Top5Post'
import Top5User from '../../components/Demo Test/Top5User'



function Admin() {

  
  return (
    <div>
      <AdminNavbar />
      <div className='cards'>
      {/* <h1>TotalUser{user.length}</h1>
      <h1>TotalPost{posts.length}</h1> */}
    
    <Top5User/>
    <Top5Post/>
  
      </div>
      {/* <>
      <TopUser/>
      </> */}
      
      {/* <div className='PostCarousel'>
       <PostCarousel/>
      </div> */}

      
      {/* <div className="FollowersCard">
      <h3>User List</h3>
      {user.map((person, id) => {
       
        
          return <TableList person={person} key={id} />;
        
      })}
    </div> */}
    
    </div>




  )
}

export default Admin