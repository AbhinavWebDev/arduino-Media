
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ImageSlider from '../Demo Test/ImageSlider'
import {useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import { getTimelinePosts } from "../../Redux/Actions/PostActions";
import { useEffect } from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





export default function Top5User() {
    const { posts, loading } = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getTimelinePosts(2244));
    }, []);
  
  return (
    <>

<Box sx={{ width: '100%' }}>
      <Stack spacing={2} style={{padding:'2%'}}>
        <Item><h1> Top 4 Posts</h1>
    
    <div style={{display:'flex', gap:'2rem', padding:'10px' ,overflow:'scroll'}}>
    
    {        posts.slice(0, 4).map((post) => {
       
            return <ImageSlider data={post} id={post._id} />
            
      })}
    
        </div></Item>
        
      </Stack>
    </Box>
    
</>

    
    
  );
}

