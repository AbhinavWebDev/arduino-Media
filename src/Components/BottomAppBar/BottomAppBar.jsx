import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import PostShare from "../PostShare/PostShare";
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Stack } from "@mui/material";
import "./BottomAppBar.css";
import defaultProfile from '../../Images/Default_DP.jpg'


function ColorSchemesExample() {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [addPost, setaddPost] = React.useState(null);
  const handleOpenAdd = () => setaddPost(true);
  const handleCloseAdd = () => setaddPost(false);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


  return (
    <>

<div class="bottomNavbar">
<Stack>
          <Item>
            <div
              style={{ display: "flex", gap: "8%" }}
           >
              <IconButton color="inherit">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="../home"
                >
                  <OtherHousesOutlinedIcon sx={{ fontSize: 33 }} />
                </Link>
              </IconButton>
              <IconButton color="inherit">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="../chatMobile"
                >
                  <MessageOutlinedIcon sx={{ fontSize: 33 }} />
                </Link>
              </IconButton>

              <AddOutlinedIcon
                sx={{ mt:1,fontSize: 40, color: "black" }}
                onClick={handleOpenAdd}
              />

              <IconButton color="inherit">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="../Suggestion"
                >
                  <FavoriteBorderOutlinedIcon sx={{ fontSize: 33 }} />
                </Link>
              </IconButton>
              <IconButton color="inherit">
                <Link
                  style={{ textDecoration: "none", color: "pink" }}
                  to={`/profile/${user._id}`}
                >
                  <Avatar
                    src={
                      user.profilePicture
                        ? serverPublic + user.profilePicture
                        : defaultProfile
                    }
                  />
                </Link>
              </IconButton>
              </div>
              </Item>
        </Stack>
        <Modal
          open={addPost}
          onClose={handleCloseAdd}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Create Post
            </Typography>
            <PostShare />
          </Box>
        </Modal>
</div>




    </>
  );
}

export default ColorSchemesExample;



