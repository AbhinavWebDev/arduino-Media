// import React, { useState } from "react";
// import "./Post.css";
// import Comment from "../../img/comment.png";
// import Share from "../../img/share.png";
// import Heart from "../../img/like.png";
// import NotLike from "../../img/notlike.png";
// import Report from "../../img/report.png";
// import unreport from "../../img/unreport.png";
// import Saved from "../../img/saved.png";
// import Save from "../../img/save.png";
// import Delete from "../../img/Delete.png";
// import LikeModal from "../LikeModal/LikeModal";
// import { UilPen } from "@iconscout/react-unicons";
// import { format } from "timeago.js";

// import { useSelector } from "react-redux";
// import {
//   deletePost,
//   likePost,
//   reportPost,
//   savePost,
// } from "../../api/PostRequest";

// const Post = ({ data }) => {
//   const { user } = useSelector((state) => state.authReducer.authData);
//   const [liked, setLiked] = useState(data.likes.includes(user._id));
//   const [likes, setLikes] = useState(data.likes.length);
//   const [report, setReport] = useState(data.report.includes(user._id));
//   const [save, setSave] = useState(data.Save.includes(user._id));
//   const [modalOpened, setModalOpened] = useState(false);
//   const handleLike = () => {
//     setLiked((prev) => !prev);
//     likePost(data._id, user._id);
//     liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
//   };

//   const handleReport = () => {
//     setReport((prev) => !prev);
//     reportPost(data._id, user._id);
//   };

//   const handleSave = () => {
//     setSave((prev) => !prev);
//     savePost(data._id, user._id);
//   };

//   const handleDelete = () => {
//     deletePost(data._id, user._id);
//   };

//   return (
//     <div className="Post">
//       <div className="author">
//         <img src={data.Logo} alt="" className="authorImage" />
//         <div className="name">
//           <span>{data.author}</span>
//         </div>
//       </div>

//       <img
//         src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
//         alt=""
//       />
//       <div className="PostReact">
//         <img
//           src={liked ? Heart : NotLike}
//           alt=""
//           style={{ cursor: "pointer" }}
//           onClick={handleLike}
//         />
//         <img src={Comment} alt="" />
//         <img src={Share} alt="" />
//         <div>
//           <span>{format(data.createdAt)}</span>
//         </div>
//         {data.userId !== user._id ? (
//           <img
//             src={report ? Report : unreport}
//             alt=""
//             style={{ cursor: "pointer", width: "3%" }}
//             onClick={handleReport}
//           />
//         ) : (
//           <img
//             src={Delete}
//             alt=""
//             style={{ cursor: "pointer", width: "3%" }}
//             onClick={handleDelete}
//           />
//         )}

//         <img
//           src={save ? Saved : Save}
//           alt=""
//           style={{ cursor: "pointer", width: "3%" }}
//           onClick={handleSave}
//         />
//       </div>
//       <div>
//         <span
//           style={{ color: "var(--grey)", fontSize: "20px", cursor: "pointer" }}
//         >
//           {likes} likes
//           <UilPen
//             width="2rem"
//             height="1.2rem"
//             onClick={() => setModalOpened(true)}
//             data={data}
//           />
//         </span>
//       </div>

//       <div className="detial">
//         <span>
//           <b>{data.name}</b>
//         </span>

//         <span>{data.desc}</span>
//       </div>
//       <LikeModal
//         modalOpened={modalOpened}
//         setModalOpened={setModalOpened}
//         PostID={data._id}
//       />
//     </div>
//   );
// };

// export default Post;

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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { pink } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Report from "../../img/report.png";
import unreport from "../../img/unreport.png";
import Saved from "../../img/saved.png";
import Save from "../../img/save.png";
import Delete from "../../img/Delete.png";
import LikeModal from "../LikeModal/LikeModal";
import { UilPen } from "@iconscout/react-unicons";
import { format } from "timeago.js";
import {  alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useSelector } from "react-redux";
import {
  deletePost,
  likePost,
  reportPost,
  savePost,
} from "../../api/PostRequest";
import Dots from "../Demo Test/Dots";










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

  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
             <Dots postdata={data.data}/>
          </IconButton>
        }
        title="Abhinav A"
        subheader={format(data.data.createdAt)}
      />
      <CardMedia
        component="img"
        height="508"
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
        {liked ?   <FavoriteIcon sx={{ color: pink[500] }}/> :<FavoriteBorderOutlinedIcon />}
         
        </IconButton>
        </Tooltip>
        <Tooltip title="Comment">
        <IconButton aria-label="share">
          <AddCommentOutlinedIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title="Share">
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </Tooltip>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Tooltip title={save ?"Un-Save" :"Save"}>
         <IconButton aria-label="save"   onClick={handleSave}>
       {save?<BookmarkIcon/>:<BookmarkBorderIcon />} 
        </IconButton>
        </Tooltip>
        </ExpandMore>
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
      <Snackbar
        open={openReport}
        autoHideDuration={6000}
        onClose={handleCloseReport}
        message={save ? "Post Reported":"Report Removed"}
        action={action}
      />




      
    </div>





    
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
    </Card>
  );
}









