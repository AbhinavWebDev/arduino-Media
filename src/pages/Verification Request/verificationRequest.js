
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import React, { useState, useEffect } from "react";
import { getAllUser } from "../../api/UserRequest";
import TableList from "../../components/TableList/TableList";
const  UserManagement= () => {

  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUser();
      setUser(data);
    };
    fetchUsers();
  }, []);
  return (
    <div>

    
    <AdminNavbar/>
    <div className="FollowersCard">
      <h3>User List</h3>

      {user.map((person, id) => {
       
        
          return <TableList person={person} key={id} page='verification' />;
        
      })}
    </div>
    
      
        
    </div>
  );
}

export default UserManagement;
