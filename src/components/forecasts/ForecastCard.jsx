import React from 'react';
import * as dayjs from 'dayjs';

const ForecastCard = ({ forecast }) => (
  <div className="card forecast-card p-2 mx-2">
    <div className="card-body d-flex flex-column align-items-center">
      <h6 className="mb-0">
        <strong>
          {Math.round(forecast.temp)}°C
        </strong>
      </h6>
      <img
        className="rounded-circle weather-gradient my-3"
        src={`http://openweathermap.org/img/wn/${forecast.icon}@4x.png`}
        alt="forecast weather icon"
        width="38"
      />
      <p className="mb-0">
        <strong>
          {dayjs(forecast.date).format('h:mm')}
        </strong>
      </p>
      <p className="mb-0 small text-muted">
        {dayjs(forecast.date).format('A')}
      </p>
    </div>
  </div>
);

export default ForecastCard;