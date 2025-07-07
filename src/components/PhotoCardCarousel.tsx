import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { CloseButton, Modal, useMantineTheme } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { PhotoCard } from "./PhotoCard";

import style from "./phototCardCarousel.module.css";
import "@mantine/carousel/styles.css";

const photos1 = [
  {
    image: "src/assets/photography/roll1/chicago_downtown.jpg",
    title: "chicago Downtown",
    category: "Testing if this could become the descriptions",
  },
  {
    image: "src/assets/photography/roll1/chicago_green.jpg",
    title: "St Patties, Chicago 2025",
    category: "Testing if this could become the descriptions",
  },
  {
    image: "src/assets/photography/roll1/david_garage.jpg",
    title: "David Bowe, Chicago 2025",
    category: "murals",
  },
  {
    image: "src/assets/photography/roll1/robin_mural.jpg",
    title: "Robin Williams, Chicago 2025",
    category: "murals",
  },
  {
    image: "src/assets/photography/roll1/john_imagine.jpg",
    title: "Best places to visit this winter",
    category: "tourism",
  },
  {
    image: "src/assets/photography/roll1/chicago_downtown_two.jpg",
    title: "Active volcanos reviews: travel at your own risk",
    category: "nature",
  },
];

const photos2 = [
  {
    image: "src/assets/photography/roll2/cdmx_angel.jpg",
    title: "The Angel of Independence",
    category: "City",
  },
  {
    image: "src/assets/photography/roll2/cdmx_hotel.jpg",
    title: "Gran Hotel Ciudad de México​​",
    category: "City",
  },
  {
    image: "src/assets/photography/roll2/cdmx_statue.jpg",
    title: "TODO",
    category: "murals",
  },
  {
    image: "src/assets/photography/roll2/cdmx_tree.jpg",
    title: "jacarandas",
    category: "murals",
  },
  {
    image: "src/assets/photography/roll2/cdmx_tacos_del_valle.jpg",
    title: "Tacos del Valle",
    category: "tourism",
  },
  {
    image: "src/assets/photography/roll2/cdmx_china_town.jpg",
    title: "Barrio Chino",
    category: "nature",
  },
];

const photos3 = [
  {
    image: "src/assets/photography/roll3/cdmx_church.jpg",
    title: "The Angel of Independence",
    category: "City",
  },
  {
    image: "src/assets/photography/roll3/cdmx_palacio.jpg",
    title: "Gran Hotel Ciudad de México​​",
    category: "City",
  },
  {
    image: "src/assets/photography/roll3/cdmx_statue.jpg",
    title: "TODO",
    category: "murals",
  },
  {
    image: "src/assets/photography/roll3/cdmx_park.jpg",
    title: "jacarandas",
    category: "murals",
  },
  {
    image: "src/assets/photography/roll3/chicago_beatnik.jpg",
    title: "Tacos del Valle",
    category: "tourism",
  },
  {
    image: "src/assets/photography/roll3/chicago_nilda.jpg",
    title: "Barrio Chino",
    category: "nature",
  },
];

const photos4 = [
  {
    image: "src/assets/photography/roll4/tepo_dinner.jpg",
    title: "The Angel of Independence",
    category: "City",
  },
  {
    image: "src/assets/photography/roll4/chicago_606_western.jpg",
    title: "Gran Hotel Ciudad de México​​",
    category: "City",
  },
  {
    image: "src/assets/photography/roll4/chicago_rockIsland.jpg",
    title: "TODO",
    category: "murals",
  },
  {
    image: "src/assets/photography/roll4/tepo_city.jpg",
    title: "jacarandas",
    category: "murals",
  },
  {
    image: "src/assets/photography/roll4/tepo_flowers.jpg",
    title: "Tacos del Valle",
    category: "tourism",
  },
  {
    image: "src/assets/photography/roll4/tepo_pyramid.jpg",
    title: "Barrio Chino",
    category: "nature",
  },
];

export const PhotoCardCarousel = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [opened, { open, close }] = useDisclosure(false);
  const [modalInfo, setModalInfo] = useState({
    img: "",
    title: "",
    category: "",
  });
  console.log("jaimes modalInfo", modalInfo);
  const roll1 = photos1.map((item) => (
    <Carousel.Slide key={item.title}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));

  const roll2 = photos2.map((item) => (
    <Carousel.Slide key={item.title}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));

  const roll3 = photos3.map((item) => (
    <Carousel.Slide key={item.title}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));

  const roll4 = photos4.map((item) => (
    <Carousel.Slide key={item.title}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Modal
        // withOverlay
        className={opened ? style.moduleOpen : style.module}
        opened={opened}
        onClose={close}
        // size="auto"
        title={modalInfo.title}
        // centered
        closeButtonProps={{
          icon: <CloseButton size="xl" variant="transparent" />,
          iconSize: "xl",
          color: "red"
        }}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <div className={style.moduleInnerContainer}>
          <img
            className={style.moduleImg}
            src={modalInfo.img}
            alt={modalInfo.title}
          />
          <section>{modalInfo.category}</section>
        </div>
      </Modal>
      {[roll1, roll2, roll3, roll4].map((item, i) => {
        return (
          <Carousel
            className={opened ? style.carousel : ""}
            key={i}
            slideSize={{ base: "100%", sm: "50%", md: "50%" }}
            // slideGap="md"
            controlsOffset="lg"
            withControls
            withIndicators={false}
            emblaOptions={{
              loop: true,
              align: i % 2 === 0 ? "start" : "end",
              duration: 25,
              dragFree: true,
              slidesToScroll: mobile ? 1 : 2,
            }}
          >
            {item}
          </Carousel>
        );
      })}
    </>
  );
};
