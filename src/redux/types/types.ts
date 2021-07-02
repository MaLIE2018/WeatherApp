import { CurrentWeather } from "../../types/currentWeather";
import { Forecast } from "../../types/forecast";
import { NextDays } from "../../types/nextDays";

export interface queryState {
  query: string;
}

export interface currentWeatherState {
  currentWeather: CurrentWeather;
}

export interface foreCastState {
  foreCast: Forecast;
}

export interface nextDaysState {
  nextDays: NextDays;
}

export enum Constants {
  SET_QUERY = "SET_QUERY",
  SET_CURRENT_WEATHER = "SET_CURRENT_WEATHER",
}

export interface IRootState {
  query: queryState;
  currentWeather: currentWeatherState;
  foreCast: foreCastState;
  nextDays: nextDaysState;
}
