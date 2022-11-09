import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconContext } from "react-icons";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { SidebarData } from "../../Data/AdminSlidebar";
import "./AdminNavbar.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import { logOut } from "../../Redux/Actions/AuthAction";
import { useDispatch } from "react-redux";
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

export default function Navbar() {
  const [openLogout, setOpenLogout] = React.useState(false);
  const [sidebar, setSidebar] = useState(false);
  const handleOpenLogout = () => setOpenLogout(true);
  const handleCloseLogout = () => setOpenLogout(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li
              style={{ color: "white" }}
              className="nav-text"
              onClick={handleOpenLogout}
            >
              <a>
                {<LogoutIcon />}
                <span> Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>

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
    </>
  );
}
