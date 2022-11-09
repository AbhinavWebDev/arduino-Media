import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { updateUser } from "../../Redux/Actions/UserAction";
import { uploadImage } from "../../Redux/Actions/PostActions";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImg, setProfileImg] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  const dispatch = useDispatch;
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImg(img)
        : setCoverImg(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImg) {
      const data = new FormData();
      const fileName = Date.now() + profileImg.name;
      data.append("name", fileName);
      data.append("file", profileImg);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    if (coverImg) {
      const data = new FormData();
      const fileName = Date.now() + coverImg.name;
      data.append("name", fileName);
      data.append("file", coverImg);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="InfoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type="text"
            className="InfoInput"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.LastName}
          />
        </div>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="worksAt"
            placeholder="works at"
            onChange={handleChange}
            value={formData.worksAT}
          />
        </div>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="livesin"
            placeholder="Lives In"
            onChange={handleChange}
            value={formData.livesIN}
          />
          <input
            type="text"
            className="InfoInput"
            name="Country"
            placeholder="Country"
            onChange={handleChange}
            value={formData.Country}
          />
        </div>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="Relationship"
            placeholder="Relationship Status"
            onChange={handleChange}
            value={formData.Relationship}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImg" onChange={onImageChange} />
        </div>
        <button className="button infoButton" onClick={handleSubmit}>
          {" "}
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
