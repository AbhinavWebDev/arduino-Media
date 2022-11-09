import { Notification } from "@mantine/core";
import { IconCheck } from "@tabler/icons";

function Demo() {
  return (
    <>
      <Notification icon={<IconCheck size={20} />} title="We notify you that">
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
    </>
  );
}
