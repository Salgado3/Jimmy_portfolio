import { Button, Paper, Text, Title } from "@mantine/core";
import style from "./photoCard.module.css";
import { type Dispatch, type SetStateAction } from "react";

type CardProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  open: () => void;
  setModalInfo: Dispatch<
    SetStateAction<{
      img: string;
      title: string;
      category: string;
      description: string;
    }>
  >;
};

export const PhotoCard = ({
  image,
  title,
  category,
  open,
  description,
  setModalInfo,
}: CardProps) => {
  const handleClick = () => {
    setModalInfo(() => ({
      img: image,
      title: title,
      category: category,
      description: description,
    }));
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
