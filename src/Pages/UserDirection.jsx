import React from "react";
import { useSelector } from "react-redux";
import Admin from "./Admin/Admin";
import Home from "./Home/Home";

export const UserDirection = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  return <div>{user.isAdmin ? <Admin /> : <Home />}</div>;
};
