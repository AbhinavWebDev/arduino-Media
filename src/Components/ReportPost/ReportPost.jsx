import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { createReport } from '../../Api/ReportRequest';
import { useState } from 'react';

export default function RadioButtonsGroup({Post,handleCloseReport}) {
    // const reason = useRef();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [reason,setReason]=useState([])
    console.log('reason is',reason);
    const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      postID: Post._id,
      userId: user._id,
    //   firstName: user.firstName,
    //   profilePicture: user.profilePicture,
      reason: reason,
    };

    createReport(newReport);

    handleCloseReport();
  };
  return (
    <FormControl>
        <Typography id="modal-modal-title" variant="h5" component="h2">
           Report
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Why are you reporting this post?
          </Typography>
      <FormLabel id="demo-radio-buttons-group-label"> Your report is anonymous,except if you're reporting an intellectual property infringement.If someone is in immediate danger,call the local emergency services don't wait.</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        
      >
        <FormControlLabel onClick={() => setReason(`It's spam`)} value="It's spam" control={<Radio />} label="It's spam" />
        <FormControlLabel onClick={() => setReason(`I just don't like`)} value="I just don't like" control={<Radio />} label="I just don't like" />
        <FormControlLabel onClick={() => setReason(`Scam or fraud`)} value="Scam or fraud" control={<Radio />} label="Scam or fraud"/>
        <FormControlLabel onClick={() => setReason(`False Information`)} value="False Information" control={<Radio />} label="False Information"/>
        <FormControlLabel onClick={() => setReason(`Bullying or harassment`)} value="Bullying or harassment" control={<Radio />} label="Bullying or harassment" />
        <FormControlLabel onClick={() => setReason(`Nudity or sexual activity`)} value="Nudity or sexual activity" control={<Radio />} label="Nudity or sexual activity" />
        <FormControlLabel onClick={() => setReason(`Something else`)} value="Something else" control={<Radio />} label="Something else" />
      </RadioGroup>
      <Stack direction="row" spacing={3} padding={2}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            
            <Button variant="outlined" onClick={handleCloseReport}>
              Cancel
            </Button>
          </Stack>
    </FormControl>
  );
}