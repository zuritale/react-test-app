import http from '../http/http.client';

class WeatherService {
  getWeather(city, lang) {
    return http.request({
      url: 'weather',
      params: {
        q: city,
        units: 'metric',
        lang,
        appid: process.env.REACT_APP_OPEN_WEATHERMAP_API_KEY
      }
    })
  }
}

export default new WeatherService();