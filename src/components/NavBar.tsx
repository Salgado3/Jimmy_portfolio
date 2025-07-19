import { Tabs } from "@mantine/core";
import { IconPhoto, IconSettings } from "@tabler/icons-react";
import type React from "react";
import type { SetStateAction } from "react";

// import style from "./navBar.module.css";

export const NavBar = ({
  setView,
}: {
  setView: React.Dispatch<
    SetStateAction<"about" | "portfolio" | "resume" | "photography">
  >;
}) => {
  return (
    //@ts-expect-error
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
