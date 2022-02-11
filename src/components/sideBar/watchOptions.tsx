import React from "react";
import { Grid, Button, Typography, Divider } from "@mui/material";

const classes = {
  button: {
    width: "100%",
    fontSize: "body1",
  },
};

interface WatchOptionsProps {
  willWatch: number;
  favorite: number;
}

const WatchOptions = ({ willWatch, favorite }: WatchOptionsProps) => {
  return (
    <>
      <Grid container item xs={12} py={1}>
        <Grid item xs={10}>
          <Button variant="text" size="small" sx={classes.button}>
            Will Watch
          </Button>
        </Grid>
        <Grid item xs={2} alignSelf="center">
          <Typography align="center">{willWatch}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <Grid container item xs={12} py={1}>
        <Grid item xs={10}>
          <Button variant="text" size="small" sx={classes.button}>
            Favorites
          </Button>
        </Grid>
        <Grid item xs={2} alignSelf="center">
          <Typography align="center">{favorite}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%" }} />
    </>
  );
};

export default WatchOptions;
