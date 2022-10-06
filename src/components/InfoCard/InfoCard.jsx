import React, { useState } from "react";
import { UilPen } from "@iconscout/react-unicons";
import "./InfoCard.css";
import ProfileModal from "../ProfileModal/ProfileModal";
export const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="Info">
        <span>
          <b>Status</b>
        </span>
        <span> Single</span>
      </div>
      <div className="Info">
        <span>
          <b>Lives In</b>
        </span>
        <span> Tokyo</span>
      </div>
      <div className="Info">
        <span>
          <b>Works at</b>
        </span>
        <span> arduino inst</span>
      </div>
      <button className="button Logout-button">Logout</button>
    </div>
  );
};
