import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UserCount from "../../Images/UserCount.gif"
import PostCount from "../../Images/PostCount.gif"
import { getAllUser } from '../../Api/UserRequest';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';


export default function CountCard() {
  const theme = useTheme();

  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <>
    <Card sx={{ display: 'flex'  }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          
          <Typography variant="h3" color="text.secondary" component="div" align='center'>
        {  persons.length}
          </Typography>
          <Typography component="div" variant="h5">
          Total Users
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={UserCount}
        alt="Live from space album cover"
      />
    </Card>

    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          
        <Typography variant="h3" color="text.secondary" component="div" align='center'>
        {  posts.length}
          </Typography>
          <Typography component="div" variant="h5">
          Total Posts
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={PostCount}
        alt="Live from space album cover"
      />
    </Card>

    
    </>
  );
}
