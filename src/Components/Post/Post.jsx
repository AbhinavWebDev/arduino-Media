

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { pink } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import "./Post.css";
import LikeModal from "../Modals/LikeModal";
import { format } from "timeago.js";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  likePost,
  reportPost,
  savePost,
} from "../../Api/PostRequest";
import Dots from "../KebabMenu/KebabMenu";
import { getTimelinePosts } from "../../Redux/Actions/PostActions";
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import Comments from "../Comments/Comments";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(360deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post(data) {
  
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.data.likes.includes(user._id));

  const [likes, setLikes] = useState(data.data.likes.length);
  const [report, setReport] = useState(data.data.report.includes(user._id));
  const [save, setSave] = useState(data.data.Save.includes(user._id));
  const [modalOpened, setModalOpened] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openReport, setOpenReport] = React.useState(false);
  const dispatch = useDispatch();





  const handleCloseReport = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenReport(false);
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data.data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
    // dispatch(getTimelinePosts(user._id));
  };

  const handleReport = () => {
    setOpenReport(true);
    setReport((prev) => !prev);
    reportPost(data._id, user._id);
  };

  const handleSave = () => {
    setOpen(true);
    setSave((prev) => !prev);
    savePost(data.data._id, user._id);
  };

  const handleDelete = () => {
    deletePost(data._id, user._id);
  };
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [comments, setComments] = useState(false);

  const handleClickComments = () => {
    setComments(true);
  };

  const handleCloseComments = () => {
    setComments(false);
  };

  return (
    <>
    <Card sx={{ maxWidth: 900 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           <img style={{width: '2.5rem',height: '2.5rem'}} src={
          data.data.profilePicture
            ? serverPublic + data.data.profilePicture
            : serverPublic + "defaultCover.jpg"
        } alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
             <Dots postdata={data.data}/>
          </IconButton>
        }
        title={data.data.firstName}
        subheader={data.data.location}
      />
      <CardMedia
        component="img"
        height="100%"
        image={
          data.data.image
            ? serverPublic + data.data.image
            : serverPublic + "defaultCover.jpg"
        }
        alt="Paella dish"
      />

      <CardActions disableSpacing>
      <Tooltip   title={liked ?"Dis-Like" :"Like"}> 
      
        <IconButton aria-label="add to favorites"  onClick={handleLike}>
        {liked ?   <FavoriteIcon sx={{ color: pink[500] }}/> :<FavoriteBorderOutlinedIcon sx={{ color: pink[500] }} />}
         
        </IconButton>
        </Tooltip>
        <Tooltip title="Comment">
        <IconButton onClick={handleClickComments} aria-label="share">
          <AddCommentOutlinedIcon  sx={{ color: '#212121' }}/>
        </IconButton>
        </Tooltip>
        <Tooltip title="Share">
        <IconButton aria-label="share" sx={{ color: '#212121' }}>
          <ShareIcon />
        </IconButton>
        </Tooltip>

          <Tooltip title={save ?"Un-Save" :"Save"}>
         <IconButton style={{marginLeft: "auto"}} aria-label="save"   onClick={handleSave}>
       {save?<BookmarkIcon sx={{ color: '#212121' }}/>:<BookmarkBorderIcon sx={{ color: '#212121' }}/>} 
        </IconButton>
        </Tooltip>
      
      </CardActions>
      <CardContent>
      { likes ? <Typography variant="body2" color="text.secondary"  onClick={() => setModalOpened(true)}>
      { likes} People Liked
        </Typography>: ''}
      
        <Typography variant="body2" color="text.secondary">
        { data.data.desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {format(data.data.createdAt)}
        </Typography>

       
        
        <LikeModal
        modalOpened={modalOpened}
         setModalOpened={setModalOpened}
      PostID={data.data._id}
      />
        <div>
     
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={save ? "Post Saved":"Post Un-Saved"}
        action={action}
      />
    </div>





    
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
    </Card>


    <div>
      <Dialog
        fullScreen
        open={comments}
        onClose={handleCloseComments}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'fixed' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseComments}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Comments
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <Comments PostID={data.data._id} key={data.data._id}/>
        </List>
      </Dialog>
    </div>
    </>
  );
}









