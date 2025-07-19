import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { PhotoCard } from "./PhotoCard";

import style from "./phototCardCarousel.module.css";
import "@mantine/carousel/styles.css";

const photos1 = [
  {
    image: "src/assets/photography/roll1/chicago_downtown.jpg",
    title: "chicago Downtown",
    category: "Testing if",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base this could become the descriptions",
  },
  {
    image: "src/assets/photography/roll1/chicago_green.jpg",
    title: "St Patties, Chicago 2025",
    category: "Testing if",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base this could become the descriptions",
  },
  {
    image: "src/assets/photography/roll1/david_garage.jpg",
    title: "David Bowe, Chicago 2025",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll1/robin_mural.jpg",
    title: "Robin Williams, Chicago 2025",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll1/john_imagine.jpg",
    title: "Best places to visit this winter",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll1/chicago_downtown_two.jpg",
    title: "Active volcanos reviews: travel at your own risk",
    category: "nature",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
];

const photos2 = [
  {
    image: "src/assets/photography/roll2/cdmx_angel.jpg",
    title: "The Angel of Independence",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll2/cdmx_hotel.jpg",
    title: "Gran Hotel Ciudad de México​​",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll2/cdmx_statue.jpg",
    title: "TODO",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll2/cdmx_tree.jpg",
    title: "jacarandas",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll2/cdmx_tacos_del_valle.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll2/cdmx_china_town.jpg",
    title: "Barrio Chino",
    category: "nature",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
];

const photos3 = [
  {
    image: "src/assets/photography/roll3/cdmx_church.jpg",
    title: "The Angel of Independence",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll3/cdmx_palacio.jpg",
    title: "Gran Hotel Ciudad de México​​",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll3/cdmx_statue.jpg",
    title: "TODO",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll3/cdmx_park.jpg",
    title: "jacarandas",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll3/chicago_beatnik.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll3/chicago_nilda.jpg",
    title: "Barrio Chino",
    category: "nature",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
];

const photos4 = [
  {
    image: "src/assets/photography/roll4/tepo_dinner.jpg",
    title: "The Angel of Independence",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll4/chicago_606_western.jpg",
    title: "Gran Hotel Ciudad de México​​",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll4/chicago_rockIsland.jpg",
    title: "TODO",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll4/tepo_city.jpg",
    title: "jacarandas",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll4/tepo_flowers.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll4/tepo_pyramid.jpg",
    title: "Barrio Chino",
    category: "nature",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
];
const photos5 = [
  {
    image: "src/assets/photography/roll5/field.jpg",
    title: "The Angel of Independence",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll5/kitchen.jpg",
    title: "Gran Hotel Ciudad de México​​",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll5/path.jpg",
    title: "TODO",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll5/shed.jpg",
    title: "jacarandas",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll5/stop_sign.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
];
const photos6 = [
  {
    image: "src/assets/photography/roll6/expiatorio_temple.jpg",
    title: "Expiatorio Park",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/agave_oven.jpg",
    title: "Gran Hotel Ciudad de México​​",
    category: "City",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/barrel_jose_cuervo.jpg",
    title: "TODO",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/expiatorio_temple.jpg",
    title: "jacarandas",
    category: "murals",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/guadalajara_cathedral.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/jose_cuervo_hacienda.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/jose_cuervo_train.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/mariachi.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/parque.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/plaza_mariachi.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
  {
    image: "src/assets/photography/roll6/tequila_pueblo.jpg",
    title: "Tacos del Valle",
    category: "tourism",
    description:
      "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base",
  },
];

export const PhotoCardCarousel = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [opened, { open, close }] = useDisclosure(false);
  const [modalInfo, setModalInfo] = useState({
    img: "",
    title: "",
    category: "",
    description: "",
  });
  description: "The description of the photo will go here for the modal. It will just provdide a short blurb of what is going on in the phooto and then can be updated. Maybe place this in the datat base";
  console.log("jaimes modalInfo", modalInfo);
  const roll1 = photos1.map((item, i) => (
    <Carousel.Slide key={item.image + i}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));

  const roll2 = photos2.map((item, i) => (
    <Carousel.Slide key={item.image + i}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));

  const roll3 = photos3.map((item, i) => (
    <Carousel.Slide key={item.image + i}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));

  const roll4 = photos4.map((item, i) => (
    <Carousel.Slide key={item.image + i}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));

  const roll5 = photos5.map((item, i) => (
    <Carousel.Slide key={item.image + i}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));
  const roll6 = photos6.map((item, i) => (
    <Carousel.Slide key={item.image + i}>
      <PhotoCard {...item} open={open} setModalInfo={setModalInfo} />
    </Carousel.Slide>
  ));
  return (
    <>
      <Modal
        className={opened ? style.moduleOpen : style.module}
        opened={opened}
        onClose={close}
        title={
          <>
            {modalInfo.title}
            <Modal.CloseButton
              style={{
                backgroundColor: "white",
                height: "14px",
                width: "14px",
              }}
            />
          </>
        }
        withCloseButton={false}
        // centered
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <div
          className={
            isMobile
              ? style.moduleMobileInnerContainer
              : style.moduleInnerContainer
          }
        >
          <img
            className={isMobile ? style.moduleMobileImg : style.moduleImg}
            src={modalInfo.img}
            alt={modalInfo.title}
          />
          <div
            className={
              isMobile
                ? style.moduleMobileImageInfoContainer
                : style.moduleImageInfoContainer
            }
          >
            <Modal.Header>
              <h3>{modalInfo.category}</h3>
            </Modal.Header>
            <p
              className={isMobile ? style.mobileDescription : style.description}
            >
              {modalInfo.description}
            </p>
            <a href="url">location link</a>
          </div>
        </div>
      </Modal>
      {[roll1, roll2, roll3, roll4, roll5, roll6].map((item, i) => {
        return (
          <Carousel
            className={opened ? style.carousel : ""}
            key={i}
            slideSize={{ base: "100%", sm: "50%", md: "50%" }}
            // slideGap="md"
            controlsOffset="lg"
            emblaOptions={{
              loop: true,
              align: i % 2 === 0 ? "start" : "end",
              duration: 25,
              dragFree: true,
              slidesToScroll: isMobile ? 1 : 2,
            }}
          >
            {item}
          </Carousel>
        );
      })}
    </>
  );
};
