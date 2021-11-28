import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Cast } from "../utils/types";
import ImageCard from "./imageCard";

const useStyles = makeStyles(() => ({
  container: {
    borderBottom: "0.5px solid grey",
    borderRadius: "5px",
    boxShadow: "0 5px 20px rgb(0 0 0 /30%), 0 0px 10px rgb(0 0 0 / 30%)",
  },
}));

interface CastDetailsProps {
  cast: Cast[];
}

const CastDetails = ({ cast }: CastDetailsProps) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid item xs={12} py={1} borderBottom="0.5px solid grey">
        <Typography width="100%" variant="h5" align="center">
          Cast
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        py={1}
        display="flex"
        justifyContent="space-between"
      >
        {cast?.map((it) => {
          return (
            <Grid item xs={3} key={it?.id} p={3}>
              <Card className={classes.container}>
                <Grid container item xs={12} p={2}>
                  <Grid item xs={6}>
                    <ImageCard
                      poster={it?.profile_path}
                      width={50}
                      height={75}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CardContent>
                      <Typography variant="body2">{it?.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {it?.character}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default CastDetails;
