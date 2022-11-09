import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ProfileLogo from "../../Images/Profile.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import PostShare from "../PostShare/PostShare";
import HomeIcon from "@mui/icons-material/Home";
import SmsIcon from "@mui/icons-material/Sms";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack } from "@mui/material";
import "./BottomAppBar.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxWidth: 500,
  Width: 375,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function BottomAppBar() {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [addPost, setaddPost] = React.useState(null);
  const handleOpenAdd = () => setaddPost(true);
  const handleCloseAdd = () => setaddPost(false);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="Navbar">
      <Box sx={{ width: "100%" }}>
        <Stack>
          <Item>
            <div
              style={{ display: "flex", gap: "1.75rem", overflow: "scroll" }}
            >
              <IconButton color="inherit">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="../home"
                >
                  <HomeIcon sx={{ fontSize: 33 }} />
                </Link>
              </IconButton>
              <IconButton color="inherit">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="../chatMobile"
                >
                  <SmsIcon sx={{ fontSize: 33 }} />
                </Link>
              </IconButton>

              <AddCircleIcon
                sx={{ mt: 1, fontSize: 40, color: "black" }}
                onClick={handleOpenAdd}
              />

              <IconButton color="inherit">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="../Suggestion"
                >
                  <FavoriteIcon sx={{ fontSize: 33 }} />
                </Link>
              </IconButton>
              <IconButton color="inherit">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/profile/${user._id}`}
                >
                  <Avatar
                    src={
                      user.profilePicture
                        ? serverPublic + user.profilePicture
                        : serverPublic + "defaultProfile.png"
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
      </Box>
    </div>
  );
}
