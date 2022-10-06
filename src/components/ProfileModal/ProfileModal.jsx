import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

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
            name="firstname"
            placeholder="First name"
          />
          <input
            type="text"
            className="InfoInput"
            name="LastName"
            placeholder="Last Name"
          />
           </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="worksAT"
              placeholder="works at"
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="livesIN"
              placeholder="Lives In"
            />
            <input
              type="text"
              className="InfoInput"
              name="Country"
              placeholder="Country"
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="Relationship"
              placeholder="Relationship Status"
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="profileImg" />
          </div>
          <button className="button infoButton"> Update</button>
       
      </form>
    </Modal>
  );
}

export default ProfileModal;
