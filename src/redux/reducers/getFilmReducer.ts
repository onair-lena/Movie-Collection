import { AnyAction } from "@reduxjs/toolkit";
import { GET_FILMS } from "../types";

const initialState = {
  films: {},
};

export const getFilmsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
      };

    default:
      return state;
  }
};
