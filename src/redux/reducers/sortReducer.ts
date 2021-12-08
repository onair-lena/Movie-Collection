import { AnyAction } from "@reduxjs/toolkit";
import { SORT_FILMS } from "../types";

export type SortingState = {
  sort: string;
};

const initialState: SortingState = {
  sort: "popularity.desc",
};

export const sortReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SORT_FILMS:
      return {
        ...state,
        sort: action.payload,
      };

    default:
      return state;
  }
};
