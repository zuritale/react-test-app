import * as dayjs from 'dayjs';

import http from '../http/http.client';

class ForecastsService {
  getForecasts(city, lang) {
    return http.request({
      url: 'forecast',
      params: {
        q: city,
        units: 'metric',
        lang,
        appid: process.env.REACT_APP_OPEN_WEATHERMAP_API_KEY
      }
    })
  }

  getForecastsByDay(forecastsList) {
    return forecastsList.reduce(function (forecastsByDay, currentForecast) {
      const forecastDate = dayjs(currentForecast.date).format('MM/DD/YYYY');

      forecastsByDay[forecastDate] = forecastsByDay[forecastDate] || [];
      forecastsByDay[forecastDate].push(currentForecast);
      return forecastsByDay;
    }, Object.create(null));
  }
}

export default new ForecastsService();