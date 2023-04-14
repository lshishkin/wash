import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { MainPage } from "./mainPage";
import { Header } from "./header";
import { About } from "./about";
import { CarouselPage } from "./carusel";
import { Price } from "./price";
import { MapComponent } from "./map";
import { Footer } from "./footer";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(82, 172, 255, 0.2)",
    backgroundImage:
      "linear-gradient(180deg, rgba(82, 172, 255, 0.2) 25%, rgba(255, 227, 44, 0.2) 100%)",
  },
});

function RootComponent() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Header />
      <MainPage />
      <About />
      <CarouselPage />
      <Price />
      <MapComponent />
      <Footer />
    </Box>
  );
}

export default RootComponent;
