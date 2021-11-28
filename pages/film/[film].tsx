import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GetStaticProps } from "next";
import React from "react";

import CastDetails from "../../src/components/castDetails";
import FilmDetails from "../../src/components/filmDetails";
import ImageCard from "../../src/components/imageCard";
import ReviewsContainer from "../../src/components/reviews";
import Trailers from "../../src/components/trailers";
import { API_ALL_MOVIE_URL, API_KEY_3 } from "../../src/utils/api/api";
import { fetchData } from "../../src/utils/fetchData";
import {
  CastAndStuff,
  Crew,
  Films,
  Reviews,
  Videos,
} from "../../src/utils/types";

const useStyles = makeStyles(() => ({
  container: {
    borderBottom: "0.5px solid grey",
    borderRadius: "5px",
    boxShadow: "0 5px 20px rgb(0 0 0 /30%), 0 0px 10px rgb(0 0 0 / 30%)",
    backgroundColor: "rgb(222, 222, 222)",
  },
}));

export type FilmDetailProps = Films;
interface FilmPageProps {
  item: [
    filmData: Films,
    stuffData: CastAndStuff,
    videoData: {
      results: Videos[];
    },
    reviewsData: Reviews
  ];
}

const Film = ({ item }: FilmPageProps) => {
  const [filmData, stuffData, videoData, reviewsData] = item;
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        container
        item
        display="flex"
        justifyContent="center"
        xs={12}
        my={3}
        className={classes.container}
      >
        <Typography width="100%" align="center" variant="h3">
          {filmData?.title}
        </Typography>

        <Typography variant="h5">{filmData?.tagline}</Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4} px={4}>
          {" "}
          <Box
            sx={{
              maxWidth: "45vh",
              boxShadow:
                "0 14px 28px rgb(0 0 0 / 60%), 0 10px 20px rgb(0 0 0 / 50%)",
            }}
          >
            <ImageCard poster={filmData?.poster_path} width={50} height={75} />
          </Box>
        </Grid>
        <Grid container item xs={8} px={4} alignContent="baseline">
          <Grid container item xs={12} px={4} pb={2}>
            <FilmDetails
              releaseDate={filmData?.release_date}
              productionCountries={filmData?.production_countries}
              genres={filmData?.genres}
              budget={filmData?.budget}
              revenue={filmData?.revenue}
              rating={filmData?.vote_average}
              crew={stuffData?.crew as Crew[]}
            />
            <Grid container item xs={12} my={3}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h6">
                  Description:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">{filmData?.overview}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} p={4}>
        <Trailers
          trailers={videoData?.results?.filter((it) =>
            it?.name?.includes("Official")
          )}
        />
      </Grid>
      <Grid container item xs={12} px={4}>
        <CastDetails cast={stuffData?.cast?.slice(0, 12)} />
      </Grid>
      <Grid container item xs={12} p={4}>
        <ReviewsContainer reviews={reviewsData} />
      </Grid>
    </Grid>
  );
};

export default Film;

export const getStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const filmId = ctx.params?.film;
  const data = await fetchData(API_ALL_MOVIE_URL, [
    `/${filmId}?api_key=${API_KEY_3}&language=en-US`,
    `/${filmId}/credits?api_key=${API_KEY_3}&language=en-US`,
    `/${filmId}/videos?api_key=${API_KEY_3}&language=en-US`,
    `/${filmId}/reviews?api_key=${API_KEY_3}&language=en-US&page=1`,
  ]);

  return {
    props: { item: data }, // will be passed to the page component as props
  };
};
