import {
  SET_ERROR,
  SET_FORECASTS
} from "./types";

import ForecastsService from '../../utils/services/forecasts.service'

export const getForecastsAPIData = (
  city,
  lang,
  callback = () => {}
) => async (dispatch) => {
  try {
    const res = await ForecastsService.getForecasts(encodeURIComponent(city), lang);

    dispatch({
      type: SET_FORECASTS,
      payload: res.data.list,
    });

    callback();
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: 'requestError'
    })
  }
};
