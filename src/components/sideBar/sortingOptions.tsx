import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Divider, Theme } from "@mui/material";
import { useDispatch } from "react-redux";
import { SORT_FILMS } from "../../redux/types";
import { API_ALL_FILMS_URL, API_KEY_3 } from "../../utils/api/api";
import { fetchData } from "../../utils/fetchData";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: "100%",
    fontSize: theme.typography.body1.fontSize,
  },
}));

const SortingOptions = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getData = async (sort: string) => {
    const data = await fetchData(
      API_ALL_FILMS_URL,
      `?api_key=${API_KEY_3}&page=1&sort_by=${sort}`
    );
    console.log("fetchData");
    dispatch({
      type: "GET_FILMS",
      payload: { page: data?.page, results: data?.results },
    });
  };

  const handleSortClick = (sort: string) => {
    dispatch({ type: SORT_FILMS, payload: sort });
    getData(sort);
  };

  return (
    <>
      <Grid container item xs={12} py={1}>
        <Grid item xs={10}>
          <Button
            variant="text"
            size="small"
            className={classes.button}
            onClick={() => handleSortClick("popularity.desc")}
          >
            Sort by popularity
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <Grid container item xs={12} py={1}>
        <Grid item xs={10}>
          <Button
            variant="text"
            size="small"
            className={classes.button}
            onClick={() => handleSortClick("vote_count.desc")}
          >
            Sort by votes
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <Grid container item xs={12} py={1}>
        <Grid item xs={10}>
          <Button
            variant="text"
            size="small"
            className={classes.button}
            onClick={() => handleSortClick("revenue.desc")}
          >
            Sort by revenue
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%" }} />
    </>
  );
};

export default SortingOptions;
