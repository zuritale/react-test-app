import React from 'react';
import { useSelector } from 'react-redux';

import WeatherCard from '../components/weather-card';
import { getCurrentWeatherSelector } from '../store/reducers/weather';
import EmptyCard from '../components/empty-card';
import { getLoadingSelector } from '../store/reducers/app';
import LoadingCard from '../components/loading-card';
import Forecasts from '../components/forecasts';
import CitySelectForm from '../components/city-select-form';

const Home = () => {
  const loading = useSelector(getLoadingSelector);

  const currentWeather = useSelector(getCurrentWeatherSelector);

  return (
    <div className="container d-flex flex-wrap my-4">
      <CitySelectForm />
      <div className="main-content-split col-10 col-sm-8 col-md-6 col-xl-4 px-4 align-items-stretch my-5">
        {currentWeather && !loading && (
          <WeatherCard weather={currentWeather} />
        )}
        {!currentWeather && !loading && (
          <EmptyCard />
        )}
        {loading && (
          <LoadingCard />
        )}
      </div>
      {currentWeather && (
        <Forecasts />
      )}
    </div>
  );
}

export default Home;