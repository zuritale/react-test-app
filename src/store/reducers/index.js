import { combineReducers } from 'redux';

import app from './app'
import forecasts from './forecasts';
import locales from './locales'
import weather from './weather';

export default combineReducers({
  app,
  forecasts,
  locales,
  weather
});