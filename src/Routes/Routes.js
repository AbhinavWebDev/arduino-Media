import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import Login from '../pages/Auth/LoginPage';
import Signup from '../pages/Auth/SignupPage';
import Chat from '../pages/Chat/Chat';
import Chatlist from '../components/Demo Test/Chatlist';
import UserManagement from '../pages/userManagement/userManagement';
import Verification from '../pages/Verification Request/verificationRequest';
import Comments from '../components/Comments/Comments';
import OTP from '../components/Demo Test/Otp';
import { UserDirection } from '../pages/UserDirection';
import PostManagement from '../pages/postManagement/postManagement'
import Profile from '../pages/Profile/Profile'
import FollowersCard from '../components/FollowersCard/FollowersCard';

export const RouteManagement = () => {
    const user = useSelector((state) => state.authReducer.authData)
    return (
        <>
            <Routes>
                <Route path="/admin" element={user ? <UserDirection /> : <Login />} />
                <Route path="/" element={user ? <UserDirection /> : <Login />} />
                <Route path="/home" element={user ? <UserDirection /> : <Login />} />
                <Route path="/auth" element={user ? <Navigate to='../home' /> : <Login />} />
                <Route path="/signup" element={user ? <Navigate to='../home' /> : <Signup />} />
                <Route path="/otp" element={user ? <Navigate to='../home' /> : <OTP />} />
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
