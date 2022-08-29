import { AsyncState } from '../../hooks/use-async';
import { LocationAPIResponse, WeatherInfo } from '../../models/Weather';
import { getFormattedLocationName } from '../../utils/weatherDetails';
import './WeatherDetails.css';

type WeatherDetailsProps = {
  weatherInfo: AsyncState<WeatherInfo | undefined>;
  locationDetails?: LocationAPIResponse;
};

export const WeatherDetails = ({
  weatherInfo,
  locationDetails,
}: WeatherDetailsProps) => {
  const formattedLocation = getFormattedLocationName(locationDetails);
  const { isLoading, hasError, result: weather } = weatherInfo;
  return (
    <>
      {isLoading && !hasError && <div>Loading weather details</div>}
      {!isLoading && !hasError && weather && (
        <div className="detailsCard">
          <div className="currentDetails">
            <h4>{`${formattedLocation}`}</h4>
            <hr />
            <div className="summary">
              <img
                src={`/weatherIcons/${weather.current.icon}.png`}
                alt="current weather icon"
              />
              <h4>{weather.current.summary}</h4>
            </div>
            <h3>{weather.current.temperature}&deg; C</h3>
          </div>
          <div className="futureDetails">
            {weather.daily.map((forecast, index) => {
              return (
                <div key={index}>
                  <p>{forecast.day.toDateString()}</p>
                  <p>{forecast.summary}</p>
                  <p>{forecast.temperature}</p>
                  <p>{forecast.temperature_min}</p>
                  <p>{forecast.temperature_max}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
