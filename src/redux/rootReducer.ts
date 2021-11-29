import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { getFilmsReducer } from "./getFilmReducer";
import { willWatchReducer } from "./willWatchReducer";

export const rootReducer = combineReducers({
  willWatchReducer,
  favoritesReducer,
  getFilmsReducer,
});
