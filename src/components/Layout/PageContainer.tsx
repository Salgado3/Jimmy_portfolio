import { useState } from "react";
import style from "./pageContainer.module.css";
import { AboutMePage } from "./AboutMePage";
import { PhotographyPage } from "./PhotographyPage";
import { PortfolioPage } from "./PortfolioPage";
import { ResumePage } from "./ResumePage";

export const PageContainer = ({ view }: { view: string }) => {
  return (
    <div className={style.container}>
      {view === "about" && <AboutMePage />}
      {view === "photography" && <PhotographyPage />}
      {view === "portfolio" && <PortfolioPage />}
      {view === "resume" && <ResumePage />}
    </div>
  );
};
