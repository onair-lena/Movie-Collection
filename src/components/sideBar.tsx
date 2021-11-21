import { Button, Divider, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: "100%",
    fontSize: theme.typography.h6.fontSize,
  },
}));

export interface RootState {
  willWatchReducer: {
    willWatchArray: number[];
  };
  favoritesReducer: {
    favoritesArray: number[];
  };
}

const SideBar = () => {
  const classes = useStyles();
  const willWatch = (state: RootState) => state.willWatchReducer;
  const favorites = (state: RootState) => state.favoritesReducer;
  const willWatchSelector = useSelector(willWatch);
  const favoritesSelector = useSelector(favorites);

  return (
    <Grid p={1} container>
      <Grid container item xs={12} py={1}>
        <Grid item xs={10}>
          <Button variant="text" size="large" className={classes.button}>
            Will Watch
          </Button>
        </Grid>
        <Grid item xs={2} alignSelf="center">
          <Typography align="center">
            {willWatchSelector?.willWatchArray.length}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <Grid container item xs={12} py={1}>
        <Grid item xs={10}>
          <Button variant="text" size="large" className={classes.button}>
            Favorites
          </Button>
        </Grid>
        <Grid item xs={2} alignSelf="center">
          <Typography align="center">
            {favoritesSelector?.favoritesArray.length}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      {/* <Grid></Grid> */}
    </Grid>
  );
};
export default SideBar;
