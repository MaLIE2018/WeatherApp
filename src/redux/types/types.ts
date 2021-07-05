import { WebStorage } from "redux-persist/es/types";
import { CurrentWeather } from "../../types/currentWeather";
import { Forecast } from "../../types/forecast";
import { NextDays } from "../../types/nextDays";

export enum Constants {
  SET_QUERY = "SET_QUERY",
  SET_CURRENT_WEATHER = "SET_CURRENT_WEATHER",
  ADD_FAVORiTE = "ADD_FAVORITE",
  REMOVE_FAVORITE = "REMOVE_FAVORITE",
}

export interface IRootState {
  query: string;
  currentWeather: CurrentWeather;
  foreCast: Forecast;
  nextDays: NextDays;
  favorites: string[];
  persistConfig: {
    key: string;
    storage: WebStorage;
  };
}
