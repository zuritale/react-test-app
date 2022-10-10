import {
  RESET_WEATHER,
  SET_ERROR,
  SET_WEATHER,
  SET_CURRENT_CITY
} from "./types";

import WeatherService from '../../utils/services/weather.service'

export const getWeatherAPIData = (
  city,
  lang,
  callback = () => {}
) => async (dispatch) => {
  try {
    const res = await WeatherService.getWeather(encodeURIComponent(city), lang);

    dispatch({
      type: SET_WEATHER,
      payload: res.data,
    });

    callback();
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: 'requestError'
    })
  }
};

export const resetWeather = () => async (dispatch) => {
  dispatch({
    type: RESET_WEATHER
  });
};

export const setCurrentCity = (city) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_CITY,
    payload: city
  });
};
