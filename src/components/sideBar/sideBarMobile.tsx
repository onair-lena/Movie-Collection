import { Grid, Button, SwipeableDrawer } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SortingOptions from "./sortingOptions";
import WatchOptions from "./watchOptions";

const classes = {
  container: {
    px: 1,
    height: "56px",
    borderBottom: "0.5px solid grey",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px rgb(0 0 0 / 30%), 0 0px 10px rgb(0 0 0 / 10%)",
  },
  box: {
    color: "black",
    fontWeight: 600,
  },
};

export interface RootState {
  willWatchReducer: {
    willWatchArray: number[];
  };
  favoritesReducer: {
    favoritesArray: number[];
  };
}

const SideBarMobile = () => {
  const willWatch = (state: RootState) => state.willWatchReducer;
  const favorites = (state: RootState) => state.favoritesReducer;
  const willWatchSelector = useSelector(willWatch);
  const favoritesSelector = useSelector(favorites);

  const [menu, setMenu] = React.useState({ state: false, item: "" });

  const toggleDrawer = (open: boolean, item: string) => {
    setMenu({ item: item, state: open });
  };

  return (
    <Grid container sx={classes.container}>
      {/* <Divider orientation="vertical" flexItem /> */}
      <Button sx={classes.box} onClick={() => toggleDrawer(true, "watch")}>
        Watch options
      </Button>
      {/* <Divider orientation="vertical" flexItem /> */}
      <Button sx={classes.box} onClick={() => toggleDrawer(true, "sort")}>
        Sort options
      </Button>
      {/* <Divider orientation="vertical" flexItem /> */}
      <SwipeableDrawer
        anchor="bottom"
        open={menu.state}
        onClose={() => toggleDrawer(false, "")}
        onOpen={() => toggleDrawer(true, "")}
      >
        {menu.item === "sort" ? (
          <SortingOptions />
        ) : (
          <WatchOptions
            willWatch={willWatchSelector?.willWatchArray.length}
            favorite={favoritesSelector?.favoritesArray.length}
          />
        )}
      </SwipeableDrawer>
    </Grid>
  );
};
export default SideBarMobile;
