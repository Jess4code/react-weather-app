import { useState } from 'react';
import './App.css';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import CurrenWteather from './components/cuurent-weather/current-weather';
import Search from './components/search/search';
import Forecast from './components/forecast/forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
  
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeather({city: searchData.label, ...weatherRes});
        setForecast({city: searchData.label ,...forecastRes});
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrenWteather data = {currentWeather}/>}
      {forecast && <Forecast data = {forecast}/>}
    </div>
  );
}

export default App;
