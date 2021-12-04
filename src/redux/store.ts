import { createStore, applyMiddleware, AnyAction } from "redux";
import thunkMiddleware from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { Middleware } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const bindMiddleware = (middleware: Middleware<any, any, any>[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export interface State {
  favoritesReducer: {
    favoritesArray: any[];
  };
  willWatchReducer: {
    willWatchArray: any[];
  };
  getFilmsReducer: {
    films: any;
  };
}

const initialState: State = {
  favoritesReducer: {
    favoritesArray: [],
  },
  willWatchReducer: {
    willWatchArray: [],
  },
  getFilmsReducer: {
    films: {},
  },
};

const reducer = (state: State = initialState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    if (state.favoritesReducer.favoritesArray.length !== 0)
      nextState.favoritesReducer.favoritesArray =
        state.favoritesReducer.favoritesArray;

    if (state.willWatchReducer.willWatchArray.length !== 0)
      nextState.willWatchReducer.willWatchArray =
        state.willWatchReducer.willWatchArray;

    if (Object.values(state.getFilmsReducer.films).length !== 0)
      nextState.getFilmsReducer.films = state.getFilmsReducer.films;

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
