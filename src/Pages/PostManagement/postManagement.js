import React from 'react'
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'
import AdminPosts from '../../Components/Posts/AdminPosts'
import ReportedPost from '../../Components/ReportedPost/ReportedPost'
function postManagement() {
  return (
    <div>
      <AdminNavbar/>
    
      {/* <AdminPosts /> */}

      <ReportedPost/>

    </div>
  
  )
}

export default postManagement