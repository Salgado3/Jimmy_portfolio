import { useState } from "react";
import { NavBar } from "./NavBar";
import { SidePanel } from "./SidePanel";

import style from "./mainContainer.module.css";
import { PageContainer } from "./Layout/PageContainer";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";

export const MainContainer = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [view, setView] = useState<
    "about" | "portfolio" | "resume" | "photography"
  >("about");
  return (
    <div className={mobile ? style.mobileContainer : style.container}>
      <SidePanel />
      <div className={style.mainPage}>
        <NavBar setView={setView} />
        <PageContainer view={view} />
      </div>
    </div>
  );
};
