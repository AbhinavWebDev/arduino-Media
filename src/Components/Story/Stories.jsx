import React from 'react'
import { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Story from "./Story";
import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    // boxShadow: 24,
    maxWidth: 432,
    maxHeight: "100%",
  };

export const Stories = (data) => {
    // const [data, setdata] = useState("");
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [openLogout, setOpenLogout] = useState(false);
  const handleOpenLogout = () => setOpenLogout(true);
  const handleCloseLogout = () => setOpenLogout(false);
console.log('ur story',data);
  return (
    <div>
        <Avatar
        style={{width:'60px', height:'auto' ,border: "3px solid green" }}
    onClick={handleOpenLogout}
    alt="defaultCover.jpg"
    src={serverPublic + data.data.profilePicture}
  />
<Typography sx={{ fontSize:12, textAlign:'center' }} variant="h6" component="div">
{data.data.firstName}
            </Typography>
 
  
  
  <Modal
        open={openLogout}
        onClose={handleCloseLogout}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="row" spacing={3}>
            <Story data={data} setOpenLogout={setOpenLogout} />
          </Stack>
        </Box>
      </Modal></div>
  )
}
