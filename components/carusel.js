import React from "react";
import Carousel from "nuka-carousel";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

const useStyle = makeStyles({
  root: {
    margin: "auto",
    height: 600,
    maxWidth: 900,
    "@media (max-width: 900px)": {
      maxHeight: 300,
      width: "100vw",
    },
  },
  image: {
    objectFit: "cover",
    minWidth: "100%",
    height: 600,
    width: 900,
    "@media (max-width: 900px)": {
      maxHeight: 300,
      width: "100vw",
    },
  },
});

export const CarouselPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.root} id="photo">
      <Typography variant="h3" mb={2}>
        Фотогалерея
      </Typography>
      <Carousel
        defaultControlsConfig={{
          nextButtonText: "Вперед",
          prevButtonText: "Назад",
          pagingDotsStyle: {
            fill: "red",
          },
        }}
      >
        <Image
          src="/slide3.jpeg"
          width={900}
          height={600}
          className={classes.image}
        />

        <Image
          src="/slide2.jpeg"
          width={900}
          height={600}
          className={classes.image}
        />

        <Image
          src="/slide1.jpeg"
          width={900}
          height={600}
          className={classes.image}
        />
      </Carousel>
    </div>
  );
};
