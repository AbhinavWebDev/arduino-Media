import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { deleteUser } from "../../actions/userAction";

function AccountModal({ modalAccount, setModalAccount, data }) {
  const theme = useMantineTheme();
  const dispatch = useDispatch;
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleSubmit = () => {
    dispatch(deleteUser(user));
    setModalAccount(false);
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
      opened={modalAccount}
      onClose={() => setModalAccount(false)}
    >
      <form className="InfoForm">
        <h3>Are you Going to delete ur account</h3>

        <button className="button delete_Button" onClick={handleSubmit}>
          {" "}
          Delete My Account
        </button>
      </form>
    </Modal>
  );
}

export default AccountModal;
