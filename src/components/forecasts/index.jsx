import React from 'react';
import { useSelector } from 'react-redux';
import * as dayjs from 'dayjs';
import { es } from 'dayjs/locale/es';
import { useIntl } from 'react-intl';

import { getForecastsSelector } from '../../store/reducers/forecasts';
import ForecastCard from './ForecastCard';
import { getLocaleSelector } from '../../store/reducers/locales';
import { dateFormats } from '../../utils/constants/formats';
import messages from '../../utils/constants/locales/messages';

const Forecasts = () => {
  const t = useIntl()
  const forecastsByDay = useSelector(getForecastsSelector);

  const lang = useSelector(getLocaleSelector);

  return (
    <div className="col-12 d-flex flex-wrap px-4 my-5 mx-auto">
      {Object.keys(forecastsByDay)?.map((key, index) => {
        const formattedDate = dayjs(key, 'DD/MM/YYYY').locale(lang).format(dateFormats[lang]);
        return (
          <div
            key={`forecasts-container-${index}-${Math.random()}`}
            className="d-flex flex-column col-12 col-xl-6 px-4 align-items-center mb-4"
          >
            <h5 >{t.formatMessage(messages.forecasts)} {formattedDate}</h5>
            <div className="d-flex col-12 p-3 overflow-auto">
              {forecastsByDay[key].map((forecast, forecastIndex) => (
                <ForecastCard
                  key={`forecasts-card-${forecastIndex}-${Math.random()}`}
                  forecast={forecast}
                />
              ))}
            </div>
          </div>
        )})}
    </div>
  )
}

export default Forecasts;
