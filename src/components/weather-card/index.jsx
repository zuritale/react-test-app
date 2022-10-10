import React from 'react';
import { useIntl } from 'react-intl';

import { weatherFields } from '../../utils/constants/fields';
import messages from '../../utils/constants/locales/messages';

const WeatherCard = ({
  weather
}) => {
  const t = useIntl();

  return (
    <div className="card h-100 w-100">
      <div className="card-header weather-gradient flex-grow-1 d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-light text-light">
            <strong>
              {weather.description}
            </strong>
          </h3>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            alt="weather icon"
            width="100"
          />
        </div>
        <div className="d-flex justify-content-start">
          <h2 className="display-2 text-light">
            <strong>
              {Math.round(weather.temp)}°C
            </strong>
          </h2>
        </div>
      </div>
      <div className="card-footer bg-white d-flex flex-column align-items-start">
        {weatherFields.map((fieldItem, index) => (
          <span key={`fields-value-${index}-${Math.random()}`} >
            <i className={`fas fa-${fieldItem.icon} fa-fw me-1`} />
            {t.formatMessage(messages[fieldItem.value])}:
            <span className="text-primary ms-1">
              {`${fieldItem.transform(weather[fieldItem.field])}${fieldItem.expression}`}
            </span>
          </span>
        ))}
      </div>
    </div>
)};

export default WeatherCard;
