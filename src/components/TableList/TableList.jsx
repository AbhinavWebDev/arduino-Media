import React, { useState } from "react";
import "./TableList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  blockUser,
  unBlockUser,
  unVerifyUser,
  verifyUser,
} from "../../actions/userAction";
import verified from "../../img/Verified.png";

function TableList({ person }) {
  const page = "";

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [block, setBlock] = useState(person.block);

  const [verify, setVerify] = useState(person.verify);

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleBlock = () => {
    block ? dispatch(unBlockUser(person._id)) : dispatch(blockUser(person._id));

    setBlock((prev) => !prev);
  };
  const handleVerify = () => {
    verify
      ? dispatch(unVerifyUser(person._id))
      : dispatch(verifyUser(person._id));

    setVerify((prev) => !prev);
  };
  return (
    <div>
      <div className="follower">
        <div>
          <img
            src={
              person.profilePicture
                ? serverPublic + person.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt=""
            className="followerImage"
          />
          <div className="name">
            <span>
              {person.firstname}
              {verify ? (
                <img
                  style={{ width: "5%", marginLeft: "2%" }}
                  src={verified}
                  alt=""
                />
              ) : (
                ""
              )}
            </span>

            <span>{person.username}</span>
          </div>
        </div>
        {page === "verification" ? (
          <button
            className={
              verify ? "button fc-button unfollowButton" : "button fc-button"
            }
            onClick={handleVerify}
          >
            {verify ? "UnVerify" : "Verify"}
          </button>
        ) : (
          <button
            className={
              block ? "button fc-button unfollowButton" : "button fc-button"
            }
            onClick={handleBlock}
          >
            {block ? "UnBlock" : "Block"}
          </button>
        )}
      </div>
      <hr />
    </div>
  );
}

export default TableList;