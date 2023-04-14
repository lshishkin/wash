import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    padding: 20,
    display: "flex",
    justifyContent: "space-between"
  }
});

export const Footer = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography variant="h6" pb={2}>
        +79827448868
      </Typography>
      <Typography variant="h6" pb={2}>
        Екатеринбург. {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};
