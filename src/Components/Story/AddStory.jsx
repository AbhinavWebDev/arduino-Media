
import React, { useState, useRef } from "react";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import {uploadStory } from "../../Redux/Actions/StoryActions";
import { uploadImage} from "../../Redux/Actions/PostActions";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import add from "../../Images/add.webp";
import { styled } from "@mui/material/styles";
import defaultProfile from '../../Images/Default_DP.jpg'
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `3px solid ${theme.palette.background.paper}`,
}));

function AddStory() {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  const reset = () => {
    setImage(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      firstName: user.firstName,
      profilePicture: user.profilePicture,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(uploadStory(newPost));

    reset();
  };
  return (
    <>
    <Badge
          onClick={() => imageRef.current.click()}
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<SmallAvatar alt="Remy Sharp" src={add} />}
        >
          <Avatar
          
            style={{width:'60px', height:'60px'}}
            src={
              user.profilePicture
                ? serverPublic + user.profilePicture
                :  defaultProfile
            }
          />
          
        </Badge>
   
      <div className="PostOption">
        

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
        <div className="previewImage">
          <UilTimes onClick={() => setImage(null)} />
          <img src={URL.createObjectURL(image)} />
          <button
            className="button ps-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>
        </div>
      )}
   
    </>
  );
}

export default AddStory;
