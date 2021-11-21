import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Cast } from "../utils/types";
import ImageCard from "./imageCard";

interface CastDetailsProps {
  cast: Cast[];
}

const CastDetails = ({ cast }: CastDetailsProps) => {
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
            <Grid item xs={2} key={it?.id} m={0.5}>
              <Card>
                <ImageCard poster={it?.profile_path} width={50} height={75} />
                <CardContent>
                  <Typography variant="body2">{it?.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {it?.character}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default CastDetails;
