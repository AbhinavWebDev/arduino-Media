import React from "react";
import "./Chatlist.css";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { userChats } from "../../api/ChatRequest";
import Conversation from "../../components/Conversation/Conversation";
import ChatBox from "../../components/ChatBox/ChatBox";
import { io } from "socket.io-client";
import Contact from "../FollowersCard/FollowersCard";
import { List, ListItem } from "@mui/material";
import CreateChat from "../ChatBox/CreateChat";
const Chatlist = () => {


   
   
  const { user } = useSelector((state) => state.authReducer.authData);
  const [page, setPage] = useState("about")
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setReciveMessage] = useState(null);
  const socket = useRef();

  

  // sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  //receive message from socket server

  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReciveMessage(data);
    });
  }, []);

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

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem style={{ justifyContent: 'center'}} >
    <div className="container">
            {page === "about" && <div>

<div className="container">
            {page === "about" && <div>


              
            </div> }
            {page === "contact" && <Contact />}
       
      {" "}
    
      

         
             
        

            <div className="Chat-list">
             <CreateChat/>
              {chats.map((chat) => (
                <div onClick={() => {setPage("contact") ; setCurrentChat(chat)}}>
                     {/* <Link style={{ textDecoration: "none", color: "inherit" }} to="../chat"> */}
                  <Conversation
                    data={chat}
                    currentUser={user._id}
                    online={checkOnlineStatus(chat)}
                  />
                  {/* </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>
       }
            {page === "contact" && <ChatBox
            chat={currentChat}
            currentUser={user._id}
            setSendMessage={setSendMessage}
            recieveMessage={recieveMessage}
          />}
       
     </div>
     </ListItem>
    </List>
    </>
  );
};

export default Chatlist;



    
    







    
        
 
