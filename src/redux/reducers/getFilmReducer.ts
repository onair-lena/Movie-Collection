import { AnyAction } from "@reduxjs/toolkit";
import { GET_FILMS } from "../types";

const initialState = {
  films: {
    page: 1,
    results: [],
    total_pages: null,
    total_results: null,
  },
};

export const getFilmsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: {
          page: action.payload.page,
          results:
            state?.films?.results?.length > 0
              ? [...state?.films?.results, ...action.payload.results]
              : action.payload.results,
        },
      };

    default:
      return state;
  }
};
