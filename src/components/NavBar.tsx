import { Tabs } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";

import style from "./navBar.module.css";

export const NavBar = ({ setView }) => {
  return (
    <Tabs defaultValue="about" onChange={setView}>
      <Tabs.List>
        <Tabs.Tab value="about" leftSection={<IconPhoto size={12} />}>
          About me
        </Tabs.Tab>
        <Tabs.Tab value="portfolio" leftSection={<IconSettings size={12} />}>
          portfolio
        </Tabs.Tab>
        <Tabs.Tab value="resume" leftSection={<IconSettings size={12} />}>
          resume
        </Tabs.Tab>
        <Tabs.Tab value="photography" leftSection={<IconSettings size={12} />}>
          photography
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
