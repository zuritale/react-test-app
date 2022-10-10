import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { getLocaleSelector } from '../../store/reducers/locales'
import { getForecastsAPIData } from '../../store/actions/forecasts';
import { getWeatherAPIData, resetWeather, setCurrentCity } from '../../store/actions/weather';
import { cities } from '../../utils/constants/cities';
import messages from '../../utils/constants/locales/messages';
import { getCurrentCitySelector } from '../../store/reducers/weather';
import { getLoadingSelector } from '../../store/reducers/app';
import { setLoading } from '../../store/actions/app';

const CitySelectForm = () => {
  const t = useIntl();

  const dispatch = useDispatch();

  const currentCity = useSelector(getCurrentCitySelector)

  const lang = useSelector(getLocaleSelector);

  const loading = useSelector(getLoadingSelector);

  const bulkWeatherDispatch = (dispachedAction) => {
    dispatch(dispachedAction(
      currentCity,
      lang,
      () => dispatch(setLoading(false))
    ));
  }

  const getData = () => {
    dispatch(setLoading(true))
    bulkWeatherDispatch(getForecastsAPIData)
    bulkWeatherDispatch(getWeatherAPIData)
  }

  const clearData = () => {
    dispatch(resetWeather());
  }

  const changeCity = (cityName) => {
    dispatch(setCurrentCity(cityName))
  }

  useEffect(() => {
    if (currentCity) getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <div
      className="main-content-split col-10 col-sm-8 col-md-6 col-xl-4 px-4 my-5"
    >
      <img className="weather-gradient image-banner" src="images/banner-logo-alt.png" alt="logo" />
      <div className="form-group w-75 my-5">
        <h5 className="form-label">{t.formatMessage(messages.citySelect)}</h5>
        <select
          onChange={($event) => changeCity($event.target.value)}
          value={currentCity}
          className="form-select"
          aria-label="Floating label select example"
        >
          <option value="" hidden>{t.formatMessage(messages.citySelectPlaceholder)}</option>
          {cities.map((city, index) => (
            <option
              key={`city-option-${index}-${Math.random()}`}
              value={city}
            >
              {t.formatMessage(messages[city])}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-around">
        <button
          disabled={!currentCity || loading}
          type="button"
          className="btn btn-primary mx-2"
          onClick={getData}
        >
          {loading && (
            <div className="spinner-border spinner-border-sm text-light me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {t.formatMessage(messages.getReport)}
        </button>
        <button
          type="button"
          className="btn btn-outline-danger mx-2"
          onClick={clearData}
        >
          {t.formatMessage(messages.reset)}
        </button>
      </div>
    </div>
  );
}

export default CitySelectForm;