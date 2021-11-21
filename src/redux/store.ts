import { createStore, compose } from "redux";
import { rootReducer } from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const store =
  typeof window !== "undefined"
    ? createStore(
        rootReducer,
        compose(
          (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
            compose
        )
      )
    : createStore(rootReducer);
