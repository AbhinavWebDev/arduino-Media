import React, { useState, useEffect } from "react";
// import './FollowersCard.css'
import User from "../User/User";
import { getlikeList } from "../../api/PostRequest";
// import { getlikeList } from "../../actions/postActions";

import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function LikeModal({ modalOpened, setModalOpened, PostID }) {
  const theme = useMantineTheme();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchLikeList = async () => {
      const { data } = await getlikeList(PostID);
      setList(data);
    };
    fetchLikeList();
  }, []);

  // Through Redux

  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.authReducer.authData);
  // const { likelist, loading } = useSelector((state) => state.postReducer);
  // useEffect(() => {
  //   dispatch(getlikeList(PostID));
  // },[]);

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
        <h3>Likes</h3>
        {list.map((person) => {
          return <User person={person} id={person._id} />;
        })}
      </div>
    </Modal>
  );
}

export default LikeModal;
