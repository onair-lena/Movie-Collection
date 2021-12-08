import {
  ADD_TO_WILL_WATCH,
  REMOVE_FROM_WILL_WATCH,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  GET_FILMS,
  SORT_FILMS,
} from "./types";

export const getFilms = (films: any[]) => {
  return {
    type: GET_FILMS,
    payload: films,
  };
};

export const setSorting = (sort: string) => {
  return {
    type: SORT_FILMS,
    payload: sort,
  };
};

export const addToWillWatch = (id: number) => {
  return {
    type: ADD_TO_WILL_WATCH,
    payload: id,
  };
};

export const removeFromWillWatch = (id: number) => {
  return {
    type: REMOVE_FROM_WILL_WATCH,
    payload: id,
  };
};

export const addToFavorites = (id: number) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: id,
  };
};

export const removeFromFavorites = (id: number) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
