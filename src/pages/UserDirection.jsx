import React from "react";
import { useSelector } from "react-redux";
import Admin from "./admin/Admin";
import Home from "./home/Home";

export const UserDirection = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  return <div>{user.isAdmin ? <Admin /> : <Home />}</div>;
};
