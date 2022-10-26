

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import React, { useState, useEffect } from "react";
import { getAllUser } from "../../api/UserRequest";
import TableList from "../../components/TableList/TableList";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





export default function UserManagement() {
   
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUser();
      setUser(data);
    };
    fetchUsers();
  }, []);
  
  return (
    


<>
<AdminNavbar/>

<Box sx={{ width: '100%' }}>
      <Stack spacing={2} style={{padding:'3%'}}>
        <Item><h1> Top 5 Posts</h1>
    
    <div style={{padding:'2%'}}>
    
    {user.map((person, id) => {
       
        
       return <TableList person={person} key={id} />;
     
   })}
    
        </div></Item>
        
      </Stack>
    </Box>
    
</>

    
    
  );
}


