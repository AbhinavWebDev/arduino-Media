import React from "react";
import "./Auth.css";
import Logo from "../../img/Logo.png";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from "../../actions/AuthAction";

export const Auth = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setisSignUp] = useState(false);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [confirmpassword, setconfirmpassword] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
    const handleSubmit = (e) => {
      e.preventDefault()

      

      if (isSignUp) {
        data.password===data.confirmpassword ? dispatch(signUp(data)) :setconfirmpassword(false)
      
    }
    else
    {
      dispatch(logIn(data))
    }
  };

  const resetForm=()=>{
    setconfirmpassword(true);
    setData({
      firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
    })
  }

  return (
    // Left Side
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>arduino Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* Right Side  */}
      <div className="a-right">
        <form className="InfoForm authForm"  onSubmit={handleSubmit} >
         
          <h3>{isSignUp ? "Sign up" : "Log In"} </h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="InfoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="InfoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              className="InfoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
              
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="InfoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="re-enter password"
                className="InfoInput"
                name="confirmpassword"
                onChange={handleChange}
                value={data.confirmpassword}
              />
            )}
          </div>
          <span
            style={{
              display: confirmpassword ? "none" : "block",
              color: "red",
              fontSize: "14px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            Password mismatch
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {setisSignUp((prev) => !prev);resetForm()}}
            >
              {isSignUp
                ? "Already have an account. LOGIN!"
                : "Don't have an account. Signup!"}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>
            {loading? "Loading....":isSignUp ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};
