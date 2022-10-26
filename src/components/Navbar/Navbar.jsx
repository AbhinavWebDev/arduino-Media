import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ProfileLogo from '../../img/Profile.jpg'
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import { useSelector } from 'react-redux';





const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -33 ,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  const { user } = useSelector((state) => state.authReducer.authData);

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar style={{ color: 'white' }} position="fixed"  sx={{ display: { xs: 'flex',sm:'none' },top: 'auto', bottom: 0 }}>
        <Toolbar>
       
          <Link style={{ textDecoration: "none", color: "inherit" }} to="../home"> <HomeOutlinedIcon sx={{ mr: 2,fontSize: 35  }}/> </Link>
         

        
          <Link style={{ textDecoration: "none", color: "inherit" }} to="../chat">
              <ChatBubbleOutlineRoundedIcon sx={{ mr: 2, fontSize: 33}} />
        </Link>
       
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton  color="inherit">
            <FavoriteBorderRoundedIcon sx={{ fontSize: 33}} />
          </IconButton>
          <IconButton color="inherit">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${user._id}`}
          >
           <Avatar alt="Remy Sharp" src={ProfileLogo} />
          </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
