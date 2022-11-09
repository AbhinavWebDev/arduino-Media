import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import Login from '../Pages/Auth/LoginPage';
import Signup from '../Pages/Auth/SignupPage';
import Chat from '../Pages/Chat/Chat';
import Chatlist from '../Components/ChatList/Chatlist';
import UserManagement from '../Pages/UserManagement/userManagement';
import Verification from '../Pages/Verification Request/verificationRequest';
import Comments from '../Components/Comments/Comments';
import OTP from '../Components/OtpInput/Otp';
import { UserDirection } from '../Pages/UserDirection';
import PostManagement from '../Pages/PostManagement/postManagement'
import Profile from '../Pages/Profile/Profile'
import FollowersCard from '../Components/FollowersCard/FollowersCard';

export const RouteManagement = () => {
    const user = useSelector((state) => state.authReducer.authData)
    return (
        <>
            <Routes>
                <Route path="/admin" element={user ? <UserDirection /> : <Login />} />
                <Route path="/" element={user ? <UserDirection /> : <Login />} />
                <Route path="/home" element={user ? <UserDirection /> : <Login />} />
                <Route path="/auth" element={user ? <Navigate to='../Home' /> : <Login />} />
                <Route path="/signup" element={user ? <Navigate to='../Home' /> : <Signup />} />
                <Route path="/otp" element={user ? <Navigate to='../Home' /> : <OTP />} />
                <Route path='/profile/:id' element={user ? <Profile /> : <Login />} />
                <Route path="/chat" element={user ? <Chat /> : <Login />} />
                <Route path="/chatMobile" element={user ? <Chatlist /> : <Login />} />
                <Route path="/admin/usermanagement" element={user ? <UserManagement /> : <Login />} />
                <Route path="/admin/postmanagement" element={user ? <PostManagement /> : <Login />} />
                <Route path="/admin/verificationRequset" element={user ? <Verification /> : <Login />} />
                <Route path="/story" element={user ? <Comments /> : <Login />} />
                <Route path="/Suggestion" element={user ? <FollowersCard /> : <Login />} />
            </Routes>
        </>
    )
}
