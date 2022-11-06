import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { getTimelinePosts } from "../../actions/postActions";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: 'center',
  color: theme.palette.text.secondary,
}));

function Posts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(2244));
  }, []);

  return (

    <>

<Box sx={{ width: '100%' }}>
      <Stack  spacing={2} style={{ margin:'3%'}}>
        <Item><h1 style={{textAlign:'center',padding:'2%'}}> Reported Post</h1>
    
        <div style={{width:'100%',display:'grid',gridTemplateColumns: 'auto auto auto auto'}}>
      {loading
        ? "Fetching Post..."
        : posts.map((post) => {
            if (post.report.length >= 1) {
              return <Post data={post} id={post._id} />;
            }
          })}
    </div></Item>
        
      </Stack>
    </Box>
    
</>
    
  );
}

export default Posts;
