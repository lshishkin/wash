import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 188, 212, 0.78), rgba(0, 188, 212, 0.78)), url("/truck.jpeg")})`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundPosition: "40%",
    backgroundBlendMode: "lighten",
  },
  title: { fontWeight: "bold!important", marginBottom: "20px!important" },
  link: { textDecoration: "none" },
  button: { padding: "15px 35px" },
  buttonTitle: { fontWeight: "bold" },
});

export const MainPage = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root} id="top">
      <Toolbar />
      <Box style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "calc(100% - 40px)",
        alignItems: "center",
      }}>
        <Typography variant="h2" className={classes.title}>
          Мойка грузовых автомобилей
        </Typography>
        <Typography variant="h4" className={classes.title}>
          Верхняя Пышма. Старотагильский тракт
        </Typography>
        <a href="tel:+79827448868" className={classes.link}>
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            startIcon={<CallIcon />}
          >
            <Typography variant="h6" className={classes.buttonTitle}>
              Связаться
            </Typography>
          </Button>
        </a>
      </Box>
    </Box>
  );
};
