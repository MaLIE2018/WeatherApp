import { combineReducers } from "redux";
import currentWeatherReducers from "./currentWeather";
import foreCastReducers from "./foreCast";
import nextDaysReducers from "./nextDays";
import queryReducers from "./queryReducer";

const allReducers = combineReducers({
  query: queryReducers,
  currentWeather: currentWeatherReducers,
  foreCast: foreCastReducers,
  nextDays: nextDaysReducers,
});

export default allReducers;
