import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import SortingOptions from "./sortingOptions";
import WatchOptions from "./watchOptions";

const useStyles = makeStyles(() => ({
  box: {
    borderBottom: "0.5px solid grey",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px rgb(0 0 0 / 30%), 0 0px 10px rgb(0 0 0 / 10%)",
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

const SideBarDesktop = () => {
  const classes = useStyles();

  const willWatch = (state: RootState) => state.willWatchReducer;
  const favorites = (state: RootState) => state.favoritesReducer;
  const willWatchSelector = useSelector(willWatch);
  const favoritesSelector = useSelector(favorites);

  return (
    <Grid container>
      <Grid container item xs={12} className={classes.box}>
        <WatchOptions
          willWatch={willWatchSelector?.willWatchArray.length}
          favorite={favoritesSelector?.favoritesArray.length}
        />
      </Grid>
      <Grid item xs={12} height="16px" />
      <Grid container item xs={12} className={classes.box}>
        <SortingOptions />
      </Grid>
    </Grid>
  );
};
export default SideBarDesktop;
