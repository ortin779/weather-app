import { useState } from 'react';
import './App.css';
import { WeatherDetails } from './components/WeatherDetails/WeatherDetails';
import { Searchbar } from './components/searchbar/Searchbar';
import { useAsyncEffect } from './hooks/use-async';
import {
  LocationAPIResponse,
  WeatherAPIResponse,
  WeatherInfo,
} from './models/Weather';
import axios from 'axios';
import { translateWeatherResponse } from './utils/weatherDetails';

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [location, setLocation] = useState('');
  const [locationDetails, setLocationDetails] = useState<LocationAPIResponse>();

  const [weatherDetails] = useAsyncEffect<WeatherInfo | undefined>({
    fn: async () => {
      const locations = await axios.get<LocationAPIResponse[]>(
        `https://www.meteosource.com/api/v1/free/find_places?text=${location}&key=${API_KEY}`
      );
      if (locations.data.length > 0) {
        setLocationDetails(locations.data[0]);
        const lat = locations.data[0].lat;
        const lon = locations.data[0].lon;
        const result = await axios.get<WeatherAPIResponse>(
          `https://www.meteosource.com/api/v1/free/point?lat=${lat}&lon=${lon}&sections=all&timezone=UTC&language=en&units=metric&key=${API_KEY}`
        );
        return translateWeatherResponse(result.data);
      }
      return undefined;
    },
    dependencies: [location],
    triggerCondition: !!location.length,
  });

  const handleLocationChange = (searchLocation: string) => {
    setLocation(searchLocation);
  };

  return (
    <div className="App">
      <h1 className="title">Weather App</h1>
      <Searchbar onSearchKeyChange={handleLocationChange} />
      <WeatherDetails
        weatherInfo={weatherDetails}
        locationDetails={locationDetails}
      />
    </div>
  );
}

export default App;
