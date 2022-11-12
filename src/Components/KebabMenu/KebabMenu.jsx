import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ErrorIcon from "@mui/icons-material/Error";
import { pink } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deletePost, reportPost } from "../../Api/PostRequest";
import { getTimelinePosts } from "../../Redux/Actions/PostActions";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import PostEdit from "../Post/PostEdit";
import ReportPost from '../ReportPost/ReportPost'

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

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Dots({postdata}) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [report, setReport] = useState(postdata.report.includes(user._id));
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openReport, setOpenReport] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleEditOpen = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleReportOpen = () => setOpenReport(true);
  const handleCloseReport = () => {setOpenReport(false)};

  const handleDelete = () => {
    deletePost(postdata._id, user._id);
    dispatch(getTimelinePosts(user._id));
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseReport}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <IconButton
        aria-label="settings"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {postdata.userId === user._id ? 
        <MenuItem onClick={handleEditOpen} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        :''}
        {postdata.userId === user._id || user.isAdmin ? (
          <MenuItem onClick={handleOpen} disableRipple>
            <DeleteIcon sx={{ color: pink[500] }} />
            Delete
          </MenuItem>
        ) : (
          <MenuItem onClick={handleReportOpen} disableRipple>
            <ErrorIcon sx={{ color: pink[500] }} />
            {report ? "Reported" : "Report"}
          </MenuItem>
        )}

        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
      {/* <Snackbar
        open={openReport}
        autoHideDuration={3000}
        onClose={handleCloseReport}
        message={report ? "Post Reported" : "Report Removed"}
        action={action}
      /> */}
      {/* Delete Post Modal */}
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
              onClick={handleDelete}
            >
              Delete
            </Button>

            <Button variant="outlined" onClick={handleCloseDelete}>
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
        <Stack direction="row" ml={45}  >
            
        <Button variant="outlined" onClick={handleCloseEdit}>
        < CloseIcon/>
            </Button>
           
            </Stack>
       
          <Typography id="modal-modal-title" variant="h5" component="h2">
           Update Post
          </Typography>
          <PostEdit Post={postdata} setOpenEdit={setOpenEdit}/>

          
        </Box>
      </Modal>


      <Modal
        open={openReport}
        onClose={handleCloseReport}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
         

          <ReportPost Post={postdata} handleCloseReport={handleCloseReport}/>

          
        </Box>
      </Modal>
    </div>
  );
}
