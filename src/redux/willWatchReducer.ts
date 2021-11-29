import { AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { ADD_TO_WILL_WATCH, REMOVE_FROM_WILL_WATCH } from "./types";

const initialState = {
  willWatchArray: [],
};

export const willWatchReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_WILL_WATCH:
      return {
        ...state,
        willWatchArray: [...state.willWatchArray, action.payload],
      };

    case REMOVE_FROM_WILL_WATCH:
      return {
        ...state,
        willWatchArray: state.willWatchArray.filter(
          (it) => it !== action.payload
        ),
      };

    default:
      return state;
  }
};
