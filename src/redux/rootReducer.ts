import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { willWatchReducer } from "./willWatchReducer";

export const rootReducer = combineReducers({
  willWatchReducer,
  favoritesReducer,
});
