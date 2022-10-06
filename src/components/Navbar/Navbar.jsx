import React, { useState, useRef } from "react";
import ProfileImage from "../../img/Profile.jpg";
import "./Navbar.css";
import { UilPlusCircle } from "@iconscout/react-unicons";
import { UilHome } from "@iconscout/react-unicons";
import { UilChat } from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
function Navbar() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="Navdown">
      <div>
        <div className="PostOption">
          <div className="Option" style={{ color: "var(--video)" }}>
            <UilHome />
          </div>
          <div className="Option" style={{ color: "var(--location)" }}>
            <UilChat />
          </div>
          <div
            className="Option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilPlusCircle />
          </div>
          <div className="Option" style={{ color: "var(--shedule)" }}>
            <UilHeart />
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
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} />
            <button className="button ps-button">
            Share
            </button>
          </div>
        )}
      </div>
      <img src={ProfileImage} alt="" />
    </div>
  );
}

export default Navbar;
