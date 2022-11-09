import React, { useState, useEffect } from "react";
// import './FollowersCard.css'
import User from "../User/User";
import { getUserList } from "../../Api/UserRequest";
// import { getlikeList } from "../../actions/postActions";

import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function LikeModal({ modalOpened, setModalOpened, ProfileId}) {
  const theme = useMantineTheme();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const [list, setList] = useState([]);
  
  useEffect(() => {
    const fetchUserList = async () => {
      const { data } = await getUserList(ProfileId)
      setList(data);
    };
    fetchUserList();
  }, []);

  
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="600px"
     
      
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
  

      <div className="FollowersCard">
        <h3>Followers</h3>
        {list.map((person) => {
          return <User person={person} id={person._id} />;
        })}
      </div>
    </Modal>
  );
}

export default LikeModal;
