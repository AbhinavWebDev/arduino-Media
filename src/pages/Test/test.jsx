import { useForm } from "@mantine/form";
import { PasswordInput, TextInput, Button } from "@mantine/core";
import "./test.css";
import Logo from "../../img/Logo_ae.svg";
import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from "../../actions/AuthAction";

export function Test() {
    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.authReducer.loading)
    const [isSignUp, setisSignUp] = useState(false);
    
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        number:"",
        password: "",
        confirmpassword: "",
      });

      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      }
        const handleSubmit = (e) => {
          e.preventDefault()
    
          
    
          if (isSignUp) {
 dispatch(signUp(data)) 
          
        }
        else
        {
          dispatch(logIn(data))
        }
      };
    
      
  // const form = useForm({
  //   initialValues: {

  //       first_name: "",
  //       last_name: "",

  //       email: "",
  //     number: "",
  //     password: "",
  //     confirm_password: "",

  //   },

    
    

  //   // functions will be used to validate values at corresponding key
  //   validate: {
      
  //       email: (data) => (/^\S+@\S+$/.test(data) ? null : "Invalid email"),
  //     password: (value) =>
  //       value.length < 6 ? "Name must have at least 6 letters" : null,
  //   },
  // });

  return (
    <div className="Signup">
      <div className="card">
        <div className="image">
          <img src={Logo} alt="" />
          <h3>arduino Media</h3>
          <p>Welcome Back</p>
        </div>

        <form  onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Sign up" : "Log In"} </h3>
        {isSignUp && (
            <div>


              
              <TextInput
            mt="sm"
            label="First Name"
            placeholder="First Name"
            name="firstname"
            onChange={handleChange}
                value={data.firstname}
          />
         

          <TextInput
            label="Last Name"
            placeholder="Last Name"
            name="lastname"
            onChange={handleChange}
                value={data.lastname}
          />
            </div>
          )}
 

          <TextInput
            mt="sm"
            label="Email"
            placeholder="Email"
            name="username"
            onChange={handleChange}
                value={data.username}
               
                
          />

{isSignUp && (
            <div>
              
              <TextInput
            mt="sm"
            label="Mobile Number"
            placeholder="Mobile Number"
            name="number"
            onChange={handleChange}
                value={data.number}
          />
            </div>
          )}
         

          <PasswordInput
            label="Password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
                value={data.password}
          />

{isSignUp && (
            <div>
              
             
          <PasswordInput
            label="Confirm Password"
            placeholder="Re-Enetr Password"
            name="confirmpassword"
            onChange={handleChange}
                value={data.confirmpassword}
          />
            </div>
          )}
<div className="dont">

<span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {setisSignUp((prev) => !prev);}}
            >
          {isSignUp
                ? "Already have an account. LOGIN!"
                : "Don't have an account?"}
          
          </span>

</div>
          


          <Button type="submit" mt="sm">
          {isSignUp ? "Signup" : "Log In"}
          </Button>
        </form>
      </div>
    </div>
  );
}