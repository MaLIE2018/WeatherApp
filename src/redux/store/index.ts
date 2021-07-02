import { createStore, StoreEnhancer } from "redux";
import allReducers from "../reducers/index";
import { IRootState } from "../types/types";

type WindowWithDevTools = Window & {
  __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>;
};

const isReduxDevtoolsExtenstionExist = (
  arg: Window | WindowWithDevTools
): arg is WindowWithDevTools => {
  return "__REDUX_DEVTOOLS_EXTENSION__" in arg;
};

const store = createStore<IRootState, any, any, any>(
  allReducers,
  isReduxDevtoolsExtenstionExist(window)
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

export default store;
