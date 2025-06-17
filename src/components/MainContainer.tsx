import { useState } from "react";
import { NavBar } from "./NavBar";
import { SidePanel } from "./SidePanel";

import style from "./mainContainer.module.css";
import { PageContainer } from "./Layout/PageContainer";

export const MainContainer = () => {
  const [view, setView] = useState<
    "about" | "portfolio" | "resume" | "photography"
  >("about");
  return (
    <div className={style.container}>
      <SidePanel />
      <div className={style.mainPage}>
        <NavBar setView={setView} />
        <PageContainer view={view} />
      </div>
    </div>
  );
};
