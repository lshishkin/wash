import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    maxWidth: 900,
    margin: "auto",
    padding: 20,
    marginTop: 80,
    marginBottom: 24,
    background: "transparent",
    width: "100%"
  }
});

export const Price = () => {
  const classes = useStyle();
  return (
    <Paper id="price" className={classes.root} elevation={3}>
      <Typography variant="h3" mb={2}>
        Цены
      </Typography>
      <Typography variant="h5">Фура (тягач + полуприцеп бортовой)</Typography>
      <Typography variant="h6" mb={2}>
        от 1600
      </Typography>
      <Typography variant="h5">Фура (тягач + полуприцеп)</Typography>
      <Typography variant="h6" mb={2}>
        от 1800
      </Typography>
      <Typography variant="h6">Точные цены узнавайте по телефону. Работаем за наличный и безналичный расчет.</Typography>
    </Paper>
  );
};
