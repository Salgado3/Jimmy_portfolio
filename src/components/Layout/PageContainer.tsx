import { AboutMePage } from "./AboutMePage";
import { PhotographyPage } from "./PhotographyPage";
import { PortfolioPage } from "./PortfolioPage";
import { ResumePage } from "./ResumePage";

import style from "./pageContainer.module.css";

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
