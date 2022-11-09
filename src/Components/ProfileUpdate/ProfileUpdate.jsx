import React, { useState, useRef } from "react";
import "../PostShare/PostShare.css";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../../Redux/Actions/UserAction";
import { uploadImage } from "../../Redux/Actions/PostActions";
import { UilScenery } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

function ProfileUpdate() {
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
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      Country: country.current.value,
      livesin: livesin.current.value,
      worksAt: worksAt.current.value,
      about: about.current.value,
      

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
    <div className="PostShare">
      
      <div>
        <input ref={firstName} required type="text" value={afirstName}
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
        onChange={(e) => setAbout(e.target.value)} />

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
        
        <button
              className="button ps-button"
              onClick={handleSubmit}
            >
               Share
            </button>
            </div>
            )}
      </div>
    </div>
  )
}

export default ProfileUpdate;
