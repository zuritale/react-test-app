import { createSelector } from '@reduxjs/toolkit';

import {
  RESET_WEATHER,
  SET_CURRENT_CITY,
  SET_WEATHER
} from '../actions/types';

const initialState = {
  currentWeather: null,
  currentCity: ''
};

function weatherReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_WEATHER:
      return {
        ...state,
        currentWeather: {
          ...payload.main,
          ...payload.wind,
          ...payload.weather[0],
        }
      }

    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: payload
      }

    case RESET_WEATHER:
      return initialState

    default:
      return state;
  }
};


export const getCurrentWeatherSelector = createSelector(
  state => state.weather,
  weather => weather.currentWeather
);

export const getCurrentCitySelector = createSelector(
  state => state.weather,
  weather => weather.currentCity
);

export default weatherReducer;