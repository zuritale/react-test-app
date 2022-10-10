import { createSelector } from '@reduxjs/toolkit';

import forecastsService from '../../utils/services/forecasts.service';
import {
  SET_FORECASTS
} from '../actions/types';

const initialState = [];

function tutorialReducer(forecasts = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FORECASTS:
      return payload.map(forecast => ({
        date: forecast.dt * 1000,
        ...forecast.weather[0],
        ...forecast.main
      }));

    default:
      return forecasts;
  }
};

export const getForecastsSelector = createSelector(
  state => state.forecasts,
  forecasts => forecastsService.getForecastsByDay(forecasts)
);

export default tutorialReducer;