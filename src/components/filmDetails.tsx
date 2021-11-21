import { Grid, Typography } from "@mui/material";
import React from "react";

interface FilmDetailsProps {
  releaseDate: Date;
  productionCountries: {
    name: string;
  }[];
  genres: {
    name: string;
  }[];
  budget: string;
  revenue: string;
  rating: number;
  crew?: {
    name: string;
    job: string;
  }[];
}

const FilmDetails = ({
  releaseDate,
  productionCountries,
  genres,
  budget,
  revenue,
  rating,
  crew,
}: FilmDetailsProps) => {
  return (
    <Grid item xs={12}>
      <Typography gutterBottom variant="h6">
        {" "}
        About movie
      </Typography>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> release date: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography> {releaseDate}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> country: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            {productionCountries?.map((it, ind) =>
              ind === productionCountries.length - 1 ? it.name : `${it.name}, `
            )}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> genres: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            {genres?.map((it, ind) =>
              ind === genres.length - 1 ? it.name : `${it.name}, `
            )}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> budget: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>{"$ " + budget}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> revenue: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>{"$ " + revenue}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> rating: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>{rating}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> director: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            {crew?.find((it) => it.job === "Director")?.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> producer: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            {crew
              ?.reduce((acc, rec) => {
                if (rec.job === "Executive Producer") {
                  return acc.concat(`${rec.name}, `);
                }
                return acc;
              }, "")
              .slice(0, -2)}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> Director of Photography: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            {crew?.find((it) => it.job === "Director of Photography")?.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> Screenplay: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            {crew
              ?.reduce((acc, rec) => {
                if (rec.job === "Screenplay") {
                  return acc.concat(`${rec.name}, `);
                }
                return acc;
              }, "")
              .slice(0, -2)}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography>Original Music Composer:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            {crew?.find((it) => it.job === "Original Music Composer")?.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography> Visual Effects: </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            {crew
              ?.reduce((acc, rec) => {
                if (rec.job === "Visual Effects") {
                  return acc.concat(`${rec.name}, `);
                }
                return acc;
              }, "")
              .slice(0, -2)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default FilmDetails;
