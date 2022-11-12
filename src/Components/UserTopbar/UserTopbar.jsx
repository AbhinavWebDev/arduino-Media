import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MessageIcon from "@mui/icons-material/Message";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import PostShare from "../PostShare/PostShare";
import Logo from "../../Images/Logo_ae.svg";
import { Gradient } from "@mui/icons-material";
import defaultProfile from "../../Images/Default_DP.jpg";

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

export default function LogoSearch() {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const [addPost, setaddPost] = React.useState(null);
  const handleOpenAdd = () => setaddPost(true);
  const handleCloseAdd = () => setaddPost(false);

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{color:'black',background: 'linear-gradient(to right,#F5F7FA,#B8C6DB)' }}>
        <Toolbar>
          <img
            style={{ width: "60px", marginRight: "10px" }}
            src={Logo}
            alt=""
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            arduino Media
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "flex"  }}}>
            <IconButton size="large" color="inherit" onClick={handleOpenAdd}>
              < AddIcon />
            </IconButton>

            <IconButton size="large" color="inherit">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="../home"
              >
                <HomeIcon />
              </Link>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="../chat"
              >
                <MessageIcon />
              </Link>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/profile/${user._id}`}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={
                    user.profilePicture
                      ? serverPublic + user.profilePicture
                      : defaultProfile
                  }
                />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

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
    </Box>
  );
}
