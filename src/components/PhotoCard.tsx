import { Button, Modal, Paper, Text, Title } from "@mantine/core";
import style from "./photoCard.module.css";
import { useState, type Dispatch, type SetStateAction } from "react";

type CardProps = {
  image: string;
  title: string;
  category: string;
  open: () => void;
  setModalInfo: Dispatch<
    SetStateAction<{ img: string; title: string; category: string }>
  >;
};

export const PhotoCard = ({
  image,
  title,
  category,
  open,
  setModalInfo,
}: CardProps) => {
  const handleClick = () => {
    setModalInfo(() => ({ img: image, title: title, category: category }));
    open();
  };

  return (
    <Paper
      shadow="md"
      p="md"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={style.card}
    >
      <div>
        <Text className={style.category} size="xs">
          {category}
        </Text>
        <Title order={1} className={style.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark" onClick={() => handleClick()}>
        expand
      </Button>
    </Paper>
  );
};
