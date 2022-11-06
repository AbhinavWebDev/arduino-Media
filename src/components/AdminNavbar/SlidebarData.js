import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "DashBoard",
    path: "/admin",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "User List",
    path: "/admin/usermanagement",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Post List",
    path: "/admin/postmanagement",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Verification",
    path: "/admin/verificationRequset",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  }
];
