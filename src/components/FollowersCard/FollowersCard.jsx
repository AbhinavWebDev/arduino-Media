import React, { useState, useEffect } from "react";
import "./FollowersCard.css";
import User from "../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import BottomAppBar from "../Navbar/Navbar";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem style={{padding:'10px', justifyContent: 'center'}} >
    <div className="FollowersCard">
      <h3>People You may know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
    </ListItem>
    </List>
    <BottomAppBar/>
    </>
  );
};

export default FollowersCard;
