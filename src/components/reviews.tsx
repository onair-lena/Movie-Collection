import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Reviews } from "../utils/types";

const useStyles = makeStyles(() => ({
  container: {
    borderBottom: "0.5px solid grey",
    borderRadius: "5px",
    boxShadow: "0 5px 20px rgb(0 0 0 /30%), 0 0px 10px rgb(0 0 0 / 30%)",
  },
}));

interface ReviewsProps {
  reviews: Reviews;
}

const ReviewsContainer = ({ reviews }: ReviewsProps) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid item xs={12} py={3} borderBottom="0.5px solid grey">
        <Typography width="100%" variant="h5" align="center">
          Reviews
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
        {reviews?.results?.map((it) => {
          return (
            <Grid item xs={12} key={it?.id} py={3}>
              <Box className={classes.container} p={2}>
                <Grid display="flex" py={2}>
                  <Avatar
                    alt="it?.author"
                    src={`https://image.tmdb.org/t/p/w500${it?.author_details?.avatar_path}`}
                  />
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <Typography
                      gutterBottom
                      variant="body1"
                      px={2}
                      alignSelf="center"
                    >
                      {it?.author}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      px={2}
                      alignSelf="center"
                    >
                      {it.updated_at.toString().split("T")[0]}
                    </Typography>
                  </Box>
                </Grid>
                <Typography variant="body2"> {it?.content}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ReviewsContainer;
