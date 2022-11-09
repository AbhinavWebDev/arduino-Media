import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Typography, Link } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import MobileScreenShareIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { otpVerify } from "../../Redux/Actions/AuthAction";
import OtpIcon from "../../Images/OtpIcon.svg"
import { borderRadius } from "@mui/system";




const useStyles = makeStyles(theme => ({
  
  paper: {
    padding: "30px",
    margin: "5% 5%",
    minHeight:"630px",
    borderRadius:"20px"
  },
  icon: {
    lineHeight: "28px"
  },
  phone: {
    margin: "20px",
    fontSize: "60px"
  }
}));

function OTP() {
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.authReducer.activeData);
 
  const classes = useStyles();
  const [otp, setOtp] = useState("");
  const preventDefault = event => event.preventDefault();
  const handleLogout = () => {
    dispatch(otpVerify({'otp':otp,'data':userData}));
  };

  return (
    <div className={classes.root}>
      

      <Grid container direction="column" alignItems="center">
        <Grid item xs>
          <Paper className={classes.paper} square>
            <Grid container direction="column" alignItems="center">
              <Grid item xs>
                <img src={OtpIcon} alt="" />
              </Grid>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  Enter the code we sent to 502-399-3121
                </Typography>
              </Grid>
              <Grid item xs>
                <OtpInput
                  value={otp}
                  onChange={otp => {
                    console.info(otp);
                    setOtp(otp);
                  }}
                  numInputs={6}
                  inputStyle={{
                    fontSize: "24px",
                    width: "36px",
                    height: "36px",
                    margin: "4px",
                    borderTop: "0px",
                    borderLeft: "0px",
                    borderRight: "0px",
                    outline: "none",
                    borderColor: "#000a46"
                  }}
                  containerStyle={{
                    margin: "20px auto",
                    padding: "10px"
                  }}
                  isInputNum
                />
              </Grid>
              <Grid item xs>
              <Button
            onClick={handleLogout}
            variant="contained"
         style={{   padding: " 10px 70px 10px 70px ",
         margin: "5% 5%",
         borderRadius:'50px',
        
        }}
           
          >
            Send
          </Button>
                <Typography variant="caption" display="block" gutterBottom>
                  Didn't get a code ? &nbsp;
                  <Link href="#" onClick={preventDefault}>
                    Send Again
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs>
                
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default OTP;
