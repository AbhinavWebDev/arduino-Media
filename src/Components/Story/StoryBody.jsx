import * as React from "react";
import { getStory } from "../../Redux/Actions/StoryActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stories } from "./Stories";
import AddStory from "./AddStory";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function StoryBody() {
  const { user } = useSelector((state) => state.authReducer.authData);
  const { story, loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStory(user._id));
  }, []);
  return (
    <div >
      <Box sx={{ width: '100%' }}>
      <Stack>
        <Item>
    
    <div style={{display:'flex', gap:'1rem' ,overflow:'scroll'}}>
    
    <AddStory/>
      {story.map((storys) => {
        return (
          <Stories data={storys} key={storys._id} />
          
        );
      })}

    
        </div></Item>
        
      </Stack>
    </Box>
      
      
    </div>
  );
}
