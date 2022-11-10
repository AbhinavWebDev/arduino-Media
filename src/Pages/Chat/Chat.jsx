import React from "react";
import "./Chat.css";
import UserTopbar from "../../Components/UserTopbar/UserTopbar";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { userChats } from "../../Api/ChatRequest";
import Conversation from "../../Components/Conversation/Conversation";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import ChatBox from "../../Components/ChatBox/ChatBox";
import { io } from "socket.io-client";
const Chat = () => {
  
  const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setReciveMessage] = useState(null);
  const socket = useRef();

  // sending message to socket server
  useEffect(()=>{
    if(sendMessage!==null){
        socket.current.emit('send-message',sendMessage)
    }
  },[sendMessage])

  //receive message from socket server

  

  useEffect(() => {
    socket.current = io(`${process.env.REACT_APP_SOCKET_URL}`);
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);


  useEffect(()=>{
    socket.current.on('receive-message',(data)=>{
        setReciveMessage(data)
    })
  },[])

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);

  const checkOnlineStatus =(chat)=>{
    const chatMember =chat.members.find((member)=>member!==user._id)
    const online =onlineUsers.find((user)=>user.userId===chatMember)
    return online?true:false
  }

  return (
    <> <UserTopbar />
    <div className="Chat">
      <div className="Left-side-chat">
        <div className="Chat-container">
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation data={chat} currentUser={user._id} online={checkOnlineStatus(chat)}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {Right Side} */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          
          {/* chat Body */}
          <ChatBox
            chat={currentChat}
            currentUser={user._id}
            setSendMessage={setSendMessage}
            recieveMessage={recieveMessage}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Chat;
