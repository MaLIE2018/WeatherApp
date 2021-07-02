import { queryState } from "../types/types";

const Init: queryState = {
  query: "Berlin",
};

function queryReducers(state: queryState = Init, action: any): queryState {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

export default queryReducers;
