import { Button, Paper, Text, Title } from "@mantine/core";
import style from "./photoCard.module.css";

type CardProps = {
  image: string;
  title: string;
  category: string;
};

export const PhotoCard = ({ image, title, category }: CardProps) => {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={style.card}
    >
      <div>
        <Text className={style.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={style.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
};
