
import { PasswordInput, TextInput, Button } from "@mantine/core";
import "./LoginPage.css";
import Logo from "../../img/Logo_ae.svg";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../actions/AuthAction";
import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    number: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(data));
  };

  return (
    <div className="Signup">
      <div className="card">
        <div className="image">
          <img src={Logo} alt="" />
          <h3>arduino Media</h3>
          <p>Welcome Back!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <h3>Log In </h3>

          <TextInput
            mt="sm"
            label="User Name"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
            value={data.username}
          />

          <PasswordInput
            label="Password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />

          <div className="dont">
            <span style={{ fontSize: "12px", cursor: "pointer" }}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="../signup"
              >
                {" "}
                Don't have an account?
              </Link>
            </span>
          </div>

          <Button type="submit" mt="sm">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}
