import React, { useState, useRef } from "react";
import "../PostShare/PostShare.css";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../../Redux/Actions/UserAction";
import { uploadImage } from "../../Redux/Actions/PostActions";
import { UilScenery } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from "@mui/material";

function ProfileUpdate({handleCloseEdit}) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [afirstName,setFirstName]=useState(user.firstName)
  const [alastName,setLastName]=useState(user.lastName)
  const [acountry,setcountry]=useState(user.Country)
  const [alivesin,setLivesIn]=useState(user.livesin)
  const [aworksAt,setWorksAt]=useState(user.worksAt)
  const [aabout,setAbout]=useState(user.about)
  const [image, setImage] = useState(null);

  const imageRef = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const country = useRef();
  const livesin = useRef();
  const worksAt = useRef();
  const about = useRef();


  // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
 

  // const reset = () => {
  //   firstName.current.value = "";
  //   lastName.current.value = "";
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userId: user._id,
      firstName: afirstName,
      lastName: alastName,
      Country: acountry,
      livesin: alivesin,
      worksAt: aworksAt,
      about: aabout,
      

    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      formData.profilePicture = filename;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(updateUser(formData));

    // reset();
  };
  return (
    <>
    <div className="PostShare">
      
      <div>
        
        {/* <input ref={firstName} required type="text" value={afirstName}
        onChange={(e) => setFirstName(e.target.value)} />
        <input ref={lastName} required type="text" value={alastName}
        onChange={(e) => setLastName(e.target.value)} />
        <input ref={country} required type="text" value={acountry}
        onChange={(e) => setcountry(e.target.value)} />
        <input ref={livesin} required type="text" value={alivesin}
        onChange={(e) => setLivesIn(e.target.value)} />
        <input ref={worksAt} required type="text" value={aworksAt}
        onChange={(e) => setWorksAt(e.target.value)} />
        <input ref={about} required type="text" value={aabout}
        onChange={(e) => setAbout(e.target.value)} /> */}

<div className="PostOption">
          <div
            className="Option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Profile Picture
          </div>

          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="profileImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} />
            </div>
            )}
      </div>
    </div>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="First Name" variant="standard"   required type="text" value={afirstName}
        onChange={(e) => setFirstName(e.target.value)} />
        <TextField id="outlined-basic" label="Last Name" variant="standard"   required type="text" value={alastName}
        onChange={(e) => setLastName(e.target.value)} />
        <TextField id="outlined-basic" label="Country" variant="standard"   required type="text" value={acountry}
        onChange={(e) => setcountry(e.target.value)} />
        <TextField id="outlined-basic" label="Lives In" variant="standard"    required type="text" value={alivesin}
        onChange={(e) => setLivesIn(e.target.value)} />
        <TextField id="outlined-basic" label="Works At" variant="standard" required type="text" value={aworksAt}
        onChange={(e) => setWorksAt(e.target.value)} />
        <TextField id="outlined-basic" label="About" variant="standard"  required type="text" value={aabout}
        onChange={(e) => setAbout(e.target.value)} />
        
  
  </Box>

  <Stack direction="row" spacing={3} padding={2}>
            <Button
              variant="outlined"
             
              onClick={handleSubmit}
            >
              Update
            </Button>
            <button
              className="button ps-button"
              onClick={handleSubmit}
            >
               Share
            </button>

            <Button variant="outlined" onClick={handleCloseEdit}>
              Cancel
            </Button>
          </Stack>
  </>
  )
}

export default ProfileUpdate;



