import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyle = makeStyles({
  map: {
    margin: "auto",
    height: 600,
    width: 900,
    "@media (max-width: 900px)": {
      height: 300,
      width: "100vw"
    }
  },
  mapTitle: {
    margin: "auto",
    width: 900,
    "@media (max-width: 900px)": {
      width: "100vw"
    }
  }
});

export const MapComponent = () => {
  const classes = useStyle();
  return (
    <YMaps id="contacts">
      <div className={classes.mapTitle}>
        <Typography variant="h3" pb={2}>
          Как нас найти?
        </Typography>
        <Typography variant="h6">
          Мы находимся в городе Верхняя Пышма. На Старотагильском тракте.
        </Typography>
        <Typography variant="h6" pb={2}>
          Орентировачный адрес: Пролетарская, 32а/4
        </Typography>
      </div>
      <Map
        className={classes.map}
        defaultState={{
          center: [56.966502, 60.623592],
          zoom: 13
        }}
      >
        <Placemark geometry={[56.966502, 60.623592]} />
      </Map>
    </YMaps>
  );
};
