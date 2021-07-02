import { nextDaysState } from "../types/types";

const Init: nextDaysState = {
  nextDays: {
    lat: 0,
    lon: 0,
    timezone: "",
    timezone_offset: 0,
    current: {
      dt: 0,
      sunrise: 0,
      sunset: 0,
      temp: 0,
      feels_like: 0,
      pressure: 0,
      humidity: 0,
      dew_point: 0,
      uvi: 0,
      clouds: 0,
      visibility: 0,
      wind_speed: 0,
      wind_deg: 0,
      wind_gust: 0,
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
    },
    daily: [
      {
        dt: 0,
        sunrise: 0,
        sunset: 0,
        moonrise: 0,
        moonset: 0,
        moon_phase: 0,
        temp: {
          day: 0,
          min: 0,
          max: 0,
          night: 0,
          eve: 0,
          morn: 0,
        },
        feels_like: {
          day: 0,
          night: 0,
          eve: 0,
          morn: 0,
        },
        pressure: 0,
        humidity: 0,
        dew_point: 0,
        wind_speed: 0,
        wind_deg: 0,
        wind_gust: 0,
        weather: [
          {
            id: 0,
            main: "",
            description: "",
            icon: "",
          },
        ],
        clouds: 0,
        pop: 0,
        uvi: 0,
        rain: 0,
      },
    ],
  },
};

function nextDaysReducers(
  state: nextDaysState = Init,
  action: any
): nextDaysState {
  switch (action.type) {
    case "SET_NEXT_DAYS":
      return { ...state, nextDays: { ...action.payload } };
    default:
      return state;
  }
}

export default nextDaysReducers;
