import { PayloadAction } from "@reduxjs/toolkit";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./types";

const initialState = {
  favoritesArray: [],
};

export const favoritesReducer = (
  state = initialState,
  action: PayloadAction<number>
) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoritesArray: [...state.favoritesArray, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoritesArray: state.favoritesArray.filter(
          (it) => it !== action.payload
        ),
      };

    default:
      return state;
  }
};
