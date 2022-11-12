import React, { useEffect } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { getTimelinePosts } from "../../Redux/Actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
import { CardMedia, Divider, Fab } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {deletePost,} from "../../Api/PostRequest";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxWidth: 500,
};


export default function NestedList() {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(2244));
  }, []);
  return (
    <>
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
                  
                    <ListItemText primary='Post' />
                    <ListItemText primary='User Name' />
                    <ListItemText primary='Likes' />
                    <ListItemText primary='Reports' />
                    {open ? <ExpandLess /> : <ExpandMore />}
                    
                  </ListItemButton>
                 
      {loading
        ? "Fetching Post..."
        : posts.map((post) => {
            if (post.report.length >= 1) {
              return (
                <>
                  <ListItemButton >
                  <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={
          post.image
            ? serverPublic + post.image
            : serverPublic + "defaultCover.jpg"
        }
        alt="Live from space album cover"
      />
    
                    <ListItemText style={{marginLeft:'230px'}} primary={post.firstName} />
                    <ListItemText primary={post.likes.length} />
                    <ListItemText primary={post.report.length} />
                    <Fab onClick={handleOpen} 
                    size="small" color="secondary" aria-label="edit">
  <DeleteIcon />

</Fab>

<Modal
    open={openDelete}
    onClose={handleCloseDelete}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h5" component="h2">
        Danger Zone
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        If you Delete your Post you will no longer be able to see in,
        .Deleting your post is a permanent and non recoverable action.
      </Typography>

      <Stack direction="row" spacing={3} padding={2}>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() =>deletePost(post._id, user._id)}
        >
          Delete
        </Button>

        <Button variant="outlined" onClick={handleCloseDelete}>
          Cancel
        </Button>
      </Stack>
    </Box>
  </Modal>
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Typography style={{marginLeft:'30px'}}>Reasons</Typography>
                      {post.report.map((reason) => {
                       return <ListItemButton sx={{ pl: 4 }}>
                        
                        <ListItemText primary={reason.reason} />
                      </ListItemButton>
                      })}
                    
                    </List>
                  </Collapse>
                </>
              );
            }
          })}
    </List>
   
  </>
  );
}
