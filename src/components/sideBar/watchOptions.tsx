import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Typography, Divider, Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: "100%",
    fontSize: theme.typography.body1.fontSize,
  },
}));

interface WatchOptionsProps {
  willWatch: number;
  favorite: number;
}

const WatchOptions = ({ willWatch, favorite }: WatchOptionsProps) => {
  const classes = useStyles();
  return (
    <>
      <Grid container item xs={12} py={1}>
        <Grid item xs={10}>
          <Button variant="text" size="small" className={classes.button}>
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
          <Button variant="text" size="small" className={classes.button}>
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
