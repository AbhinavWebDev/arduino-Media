// import React, { useEffect, useState } from "react";
// import { UilPen, UilLockOpenAlt } from "@iconscout/react-unicons";
// // import "./InfoCard.css";
// import ProfileModal from "../ProfileModal/ProfileModal";
// import AccountModal from "../ProfileModal/AccountModal";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import * as userApi from "../../api/UserRequest";
// import { logOut } from "../../actions/AuthAction";
// import { deleteUser } from "../../actions/userAction";

// export const InfoCard = () => {
//   const [modalOpened, setModalOpened] = useState(false);
//   const [modalAccount, setModalAccount] = useState(false);
//   const dispatch = useDispatch();
//   const params = useParams();

//   const profileUserId = params.id;
//   const [profileUser, setProfileUser] = useState({});
//   console.log('im user',profileUser);
//   const { user } = useSelector((state) => state.authReducer.authData);
//   useEffect(() => {
//     const fetchProfileUser = async () => {
//       if (profileUserId === user._id) {
//         setProfileUser(user);
//       } else {
//         const profileUser = await userApi.getUser(profileUserId);
//         setProfileUser(profileUser);
//       }
//     };
//     fetchProfileUser();
//   }, [user]);

//   const handleLogout = () => {
//     dispatch(logOut());
//   };

//   const handleDelete = () => {
//     dispatch(deleteUser(user._id));
//   };
//   return (
//     <div className="InfoCard">
//       <div className="InfoHead">
//         <h4>Profile Info</h4>
//         {user._id === profileUserId ? (
//           <div>
//             <UilPen
//               width="2rem"
//               height="1.2rem"
//               onClick={() => setModalOpened(true)}
//             />

//             <ProfileModal
//               modalOpened={modalOpened}
//               setModalOpened={setModalOpened}
//               data={user}
//             />
//             <AccountModal
//               modalAccount={modalAccount}
//               setModalAccount={setModalAccount}
//               data={user}
//             />
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//       <div className="Info">
//         <span>
//           <b>Status</b>
//         </span>
//         <span> {profileUser.relationship}</span>
//       </div>
//       <div className="Info">
//         <span>
//           <b>Lives In</b>
//         </span>
//         <span>{profileUser.livesin}</span>
//       </div>
//       <div className="Info">
//         <span>
//           <b>Works at</b>
//         </span>
//         <span>{profileUser.worksAt}</span>
//       </div>
//       <div className="info-button">
//         <button className="button Delete-button" onClick={handleDelete}>
//           Delete
//         </button>
//         <button className="button Logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userApi from "../../Api/UserRequest";
import { logOut } from "../../Redux/Actions/AuthAction";
import { deleteUser } from "../../Redux/Actions/UserAction";
import { useParams } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";

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

export function InfoCard() {
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  const { deleteuser } = useSelector((state) => state.authReducer);
  const params = useParams();
  const dispatch = useDispatch();
  const profileUserId = params.id;
  React.useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await userApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleDelete = () => {
    dispatch(deleteUser(user._id));
  };
  // if(deleteuser){dispatch(logOut())}

  const [open, setOpen] = React.useState(false);
  const [openLogout, setOpenLogout] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenLogout = () => setOpenLogout(true);
  const handleCloseLogout = () => setOpenLogout(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem style={{ padding: "10px", justifyContent: "center" }}>
          <h4>Profile Info</h4>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PinDropIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Lives In" secondary={profileUser.livesin} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary={profileUser.worksAt} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LanguageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Country" secondary={profileUser.Country} />
        </ListItem>
        <Stack padding={3}>
          <Button  onClick={handleOpenOpenEdit} variant="outlined" startIcon={<EditIcon />}>
            Edit Account
          </Button>
        </Stack>
        <Stack direction="row" padding={2} spacing={5}>
          <Button
            onClick={handleOpen}
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            onClick={handleOpenLogout}
            variant="outlined"
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Stack>
      </List>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Danger Zone
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              If you Delete your account you will no longer be able to sign in,
              and all of your data will be deleted.Deleting your account is a
              permanent and non recoverable action.
            </Typography>

            <Stack direction="row" spacing={3} padding={2}>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                Delete
              </Button>

              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Stack>
          </Box>
        </Modal>

        <Modal
          open={openLogout}
          onClose={handleCloseLogout}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Confirm Logout
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure want to Logout.
            </Typography>

            <Stack direction="row" spacing={3} padding={2}>
              <Button variant="contained" onClick={handleLogout}>
                Yes, log out
              </Button>
              <Button variant="outlined" onClick={handleCloseLogout}>
                Cancel
              </Button>
            </Stack>
          </Box>
        </Modal>


         {/* Edit Post Modal */}
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
           Update Info
          </Typography>
          <ProfileUpdate handleCloseEdit={handleCloseEdit}/>

          
        </Box>
      </Modal>
      </div>
    </>
  );
}
