

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
  minHeight:'75vh',
}));





export default function Verification() {
   
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
        <Item><h1>User Verification</h1>
    
    <div style={{padding:'2%'}}>
    
    {user.map((person, id) => {
       
       if(person.followers.length>2){

        return <TableList person={person} key={id} page='verification' />;

       }
        
      
     
   })}
    
        </div></Item>
        
      </Stack>
    </Box>
    
</>

    
    
  );
}


