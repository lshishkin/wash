import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    padding: 40,
    maxWidth: 900,
    margin: "auto",
    background: "transparent",
    marginTop: 24,
    marginBottom: 24
  }
});

export const About = () => {
  const classes = useStyle();
  return (
    <Paper id="about" elevation={3} className={classes.root}>
      <Typography variant="h3" pb={2}>
        О нас
      </Typography>
      <Typography variant="h6" pb={2}>
        Добро пожаловать на сайт нашей мойки грузовых автомобилей в городе
        Верхняя Пышма! Мы специализируемся на профессиональной мойке грузовых
        автомобилей любых марок и моделей. Работы проводится в ангаре 12 на 24
        метра.
      </Typography>
      <Typography variant="h6" pb={2}>
        Мы понимаем, что грузовые автомобили играют важную роль в вашем бизнесе,
        поэтому мы стремимся обеспечить их чистоту и поддерживать высокий
        уровень производительности вашего автопарка. Наша мойка грузовых
        автомобилей предлагает быструю и эффективную работу по доступным ценам,
        что позволяет вам экономить время и деньги.
      </Typography>
      <Typography variant="h6" pb={2}>
        Если вы хотите обеспечить максимальную чистоту и производительность
        вашего грузового автомобиля, свяжитесь с нами сегодня и мы с радостью
        предоставим вам качественные услуги по мойке и очистке вашего автопарка!
      </Typography>
    </Paper>
  );
};
