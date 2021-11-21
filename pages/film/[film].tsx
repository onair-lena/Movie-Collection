import { Box, Grid, Typography } from "@mui/material";
import { GetStaticProps } from "next";
import React from "react";

import CastDetails from "../../src/components/castDetails";
import FilmDetails from "../../src/components/filmDetails";
import ImageCard from "../../src/components/imageCard";
import { API_ALL_MOVIE_URL, API_KEY_3 } from "../../src/utils/api/api";
import { fetchData } from "../../src/utils/fetchData";
import {
  CastAndStuff,
  Crew,
  Films,
  Reviews,
  Videos,
} from "../../src/utils/types";

export type FilmDetailProps = Films;
interface FilmPageProps {
  item: [
    filmData: Films,
    stuffData: CastAndStuff,
    videoData: Videos,
    reviewsData: Reviews
  ];
}

const Film = ({ item }: FilmPageProps) => {
  const [filmData, stuffData, videoData, reviewsData] = item;
  console.log(videoData, reviewsData);

  return (
    <Grid container>
      <Grid
        container
        item
        display="flex"
        justifyContent="center"
        xs={12}
        my={3}
        borderBottom="0.5px solid grey"
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
              width: "30vw",
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
            <Grid
              container
              item
              // display="flex"
              // justifyContent="center"
              xs={12}
              my={3}
            >
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
        <CastDetails cast={stuffData?.cast?.slice(0, 10)} />
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
    `/${filmId}/images?api_key=${API_KEY_3}&language=en-US`,
    `/${filmId}/reviews?api_key=${API_KEY_3}&language=en-US&page=1`,
  ]);

  return {
    props: { item: data }, // will be passed to the page component as props
  };
};
