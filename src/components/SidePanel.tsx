import { Accordion, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconPhoto } from "@tabler/icons-react";

import style from "./sidePanel.module.css";

export const SidePanel = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return mobile ? (
    <Accordion
      transitionDuration={500}
      className={style.accordion}
      variant="filled"
    >
      <Accordion.Item value="developer info">
        <Accordion.Control
          icon={<IconPhoto size={6} color="var(--mantine-color-red-6)" />}
        >
          Jaime Salgado
          <section>software developer</section>
        </Accordion.Control>
        <Accordion.Panel>Dropdown info goes here</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ) : (
    <>
      <div>
        <img src="/testing/test" alt="profile pic goes here" />
        <h2>Jaime Salgado</h2>
        <p>Software Developer</p>
      </div>
    </>
  );
};
