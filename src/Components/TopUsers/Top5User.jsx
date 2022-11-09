import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '../ProfileCard/ProfileCard'
import { getTopUser } from '../../Api/UserRequest'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';



import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





export default function Top5User() {
    const { posts, loading } = useSelector((state) => state.postReducer);
    const [user, setUser] = useState([]);
   
    useEffect(() => {
      const fetchUsers = async () => {
        const { data } = await getTopUser();
        setUser(data);
      };
      fetchUsers();
    }, []);
  return (
    <>

<Box sx={{ width: '100%' }}>
      <Stack spacing={2} style={{padding:'3%'}}>
        <Item><h1> Top 4 User</h1>
    
    <div style={{display:'flex', gap:'2rem', padding:'20px' ,overflow:'scroll'}}>
    
          {
             user.slice(0, 4).map((user) => {
                
                  return <Card Top5User={user} id={user._id} page='Top5User' />
                
              })}
    
        </div></Item>
        
      </Stack>
    </Box>
    
</>

    
    
  );
}
