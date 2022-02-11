import {
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { makeStyles } from "@mui/styles";

import React, { useEffect, useState } from "react";
import ImageCard from "./imageCard";
import { useDispatch, useSelector } from "react-redux";

import {
  ADD_TO_FAVORITES,
  ADD_TO_WILL_WATCH,
  REMOVE_FROM_FAVORITES,
  REMOVE_FROM_WILL_WATCH,
} from "../redux/types";
import { RootState } from "./sideBar/sideBarDesktop";

import { Films } from "../utils/types";

const classes = {
  container: {
    borderBottom: "0.5px solid grey",
    borderRadius: "5px",
    boxShadow: "0 15px 30px rgb(0 0 0 /50%), 0 10px 30px rgb(0 0 0 / 50%)",
  },
};

export interface CardProps {
  item?: Films;
}

const Card = ({ item }: CardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const willWatchCounter = (state: RootState) => state.willWatchReducer;
  const favoritesCounter = (state: RootState) => state.favoritesReducer;
  const willWatchSelector = useSelector(willWatchCounter);
  const favoritesSelector = useSelector(favoritesCounter);
  const dispatch = useDispatch();

  const [willWatch, setWillWatch] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);

  const handleWillWatchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: willWatch ? REMOVE_FROM_WILL_WATCH : ADD_TO_WILL_WATCH,
      payload: item?.id,
    });
  };

  useEffect(() => {
    setWillWatch(
      willWatchSelector?.willWatchArray?.includes(item?.id as number)
    );
  }, [willWatchSelector]);

  const handleFavoritesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: liked ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES,
      payload: item?.id,
    });
  };

  useEffect(() => {
    setLiked(favoritesSelector?.favoritesArray?.includes(item?.id as number));
  }, [favoritesSelector]);

  return (
    <Grid container sx={classes.container}>
      {isMobile && (
        <Grid item xs={12} textAlign="end">
          <Tooltip title="Add to Will Watch">
            <IconButton onClick={(e) => handleWillWatchClick(e)}>
              {willWatch ? (
                <BookmarkAddedOutlinedIcon fontSize="small" color="error" />
              ) : (
                <BookmarkAddOutlinedIcon fontSize="small" color="success" />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to Favorites">
            <IconButton onClick={(e) => handleFavoritesClick(e)}>
              {liked ? (
                <FavoriteOutlinedIcon fontSize="small" color="error" />
              ) : (
                <FavoriteBorderOutlinedIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Grid>
      )}
      <Grid item xs={12}>
        <ImageCard poster={item?.backdrop_path} width={160} height={90} />
      </Grid>
      <Grid
        item
        xs={isMobile ? 12 : 8}
        height={theme.spacing(isMobile ? 6 : 8)}
      >
        <Typography
          component="h5"
          variant={isMobile ? "caption" : "h5"}
          align="center"
        >
          {item?.title}
        </Typography>
      </Grid>
      {!isMobile && (
        <Grid item xs={4} textAlign="end">
          <Tooltip title="Add to Will Watch">
            <IconButton onClick={(e) => handleWillWatchClick(e)}>
              {willWatch ? (
                <BookmarkAddedOutlinedIcon fontSize="large" color="error" />
              ) : (
                <BookmarkAddOutlinedIcon fontSize="large" color="success" />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to Favorites">
            <IconButton onClick={(e) => handleFavoritesClick(e)}>
              {liked ? (
                <FavoriteOutlinedIcon fontSize="large" color="error" />
              ) : (
                <FavoriteBorderOutlinedIcon fontSize="large" />
              )}
            </IconButton>
          </Tooltip>
        </Grid>
      )}
    </Grid>
  );
};

export default Card;
