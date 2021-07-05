import { combineReducers } from "redux";
import currentWeatherReducers from "./currentWeather";
import favoritesReducers from "./favorites";
import foreCastReducers from "./foreCast";
import nextDaysReducers from "./nextDays";
import queryReducers from "./queryReducer";

const allReducers = combineReducers({
  query: queryReducers,
  currentWeather: currentWeatherReducers,
  foreCast: foreCastReducers,
  nextDays: nextDaysReducers,
  favorites: favoritesReducers,
});

export default allReducers;
