import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { getFilmsReducer } from "./getFilmReducer";
import { sortReducer } from "./sortReducer";
import { willWatchReducer } from "./willWatchReducer";

export const rootReducer = combineReducers({
  willWatchReducer,
  favoritesReducer,
  getFilmsReducer,
  sortReducer,
});
