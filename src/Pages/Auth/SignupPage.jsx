import React, { useEffect } from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,

  CardHeader,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { signUp } from "../../Redux/Actions/AuthAction";
import {signUpok} from "../../Redux/Actions/AuthAction";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo_ae.svg";
import SignUp_sucess from "../../Images/SignUp_Success.gif";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import OTP from "../../Components/OtpInput/Otp";
import {Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as authApi from "../../Api/AuthRequest";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  maxWidth: 500,
  
};
const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

//Data
const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  number: "",
  password: "",
  confirm_password: "",
};

//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  username: Yup.string().email("Invalid email").required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      "Must contain one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contain one uppercase alphabetical character!"
    )
    .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Signup = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { Otpsend,Otpverify,activeData } = useSelector((state) => state.authReducer);
  const [otpStatus,setotpStatus]=useState(Otpverify)
  console.log("yes or no",otpStatus);
  
  const onSubmit = (values) => {
    dispatch(signUp(values));
  };
console.log('otp status',Otpverify);

// useEffect(() => {
//      const fetchProfileUser = async () => {
//        if (otpStatus) {
//         const profileUser = await authApi.signUpok(activeData.userData);
//         setotpStatus(false);
//       } else {
       
//         setotpStatus(false);
//         }
//       };
//        fetchProfileUser();
//      }, [setotpStatus]);

  // if(Otpverify){dispatch(signUpok(activeData.userData))}




  return (
    <>
      <Grid container justify="center" spacing={1} >
        <Grid item md={6}>
          <Card className={classes.padding}>
            <div className="image">
              <img src={Logo} alt="" />
              <h3>arduino Media</h3>
              <p>Welcome Back!</p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ dirty, isValid, values, handleChange, handleBlur }) => {
                return (
                
                  <Form>
                    <CardContent  >
                      <Grid item container spacing={3} justify="center">
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            value={values.firstName}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name="lastName"
                            value={values.lastName}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="User Name"
                            variant="outlined"
                            fullWidth
                            name="username"
                            value={values.username}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Mobile Number"
                            variant="outlined"
                            fullWidth
                            name="number"
                            value={values.number}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Password"
                            variant="outlined"
                            fullWidth
                            name="password"
                            value={values.password}
                            type="password"
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth
                            name="confirm_password"
                            value={values.confirm_password}
                            type="password"
                            component={TextField}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button
                        // disabled={!dirty || !isValid}
                        variant="contained"
                        color="primary"
                        type="Submit"
                        
                      >
                        REGISTER
                      </Button>
                      <div className="dont">
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to="../auth"
                        >
                          <span style={{ fontSize: "12px", cursor: "pointer" }}>
                            Already have an account. LOGIN!
                          </span>
                        </Link>
                      </div>
                    </CardActions>
                  </Form>
                );
              }}
            </Formik>
          </Card>
        </Grid>
      </Grid>

      <Modal
        open={Otpsend}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <OTP />
      </Modal>
    </>
  );
};

export default Signup;
