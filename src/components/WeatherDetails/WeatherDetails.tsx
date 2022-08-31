import { AsyncState } from '../../hooks/use-async';
import { LocationAPIResponse, WeatherInfo } from '../../models/Weather';
import { getFormattedLocationName } from '../../utils/weatherDetails';
import ErrorIcon from '../../icons/error.svg';
import './WeatherDetails.css';

type WeatherDetailsProps = {
  weatherInfo: AsyncState<WeatherInfo | undefined>;
  locationDetails?: LocationAPIResponse;
};

type DailyForecastInfoProps = {
  forecastInfo: WeatherInfo['daily'][0];
};

const DailyForecastInfo = ({ forecastInfo }: DailyForecastInfoProps) => {
  const {
    day,
    temperature,
    temperature_max,
    temperature_min,
    summary,
    icon,
    wind,
  } = forecastInfo;
  return (
    <div className={'forecastCard'}>
      <h4>{day.toLocaleDateString()}</h4>
      <div>
        <img src={`/weatherIcons/${icon}.png`} alt="current weather icon" />
        <p>{summary}</p>
      </div>
      <div>
        <h4>Normal: {temperature}&deg; C</h4>
        <h4>Min: {temperature_min}&deg; C</h4>
        <h4>Max: {temperature_max}&deg; C</h4>
      </div>
      <div>
        <p>Wind speed {wind.speed} km</p>
      </div>
    </div>
  );
};

export const WeatherDetails = ({
  weatherInfo,
  locationDetails,
}: WeatherDetailsProps) => {
  const formattedLocation = getFormattedLocationName(locationDetails);
  const { isLoading, hasError, result: weather } = weatherInfo;
  return (
    <>
      {isLoading && !hasError && (
        <div className="loading" data-testid="loader">
          <div className="loader" />
          <h2>Loading weather details</h2>
        </div>
      )}
      {!isLoading && hasError && (
        <div className="errorBox">
          <img src={ErrorIcon} data-testid="error-icon" />
          <h3>Error while fetching Weather Details...</h3>
        </div>
      )}
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
              <div>
                <h4>{weather.current.summary}</h4>
                <h3>{weather.current.temperature}&deg; C</h3>
              </div>
            </div>
          </div>
          <div className="futureDetails">
            {weather.daily.map((forecast, index) => {
              return <DailyForecastInfo key={index} forecastInfo={forecast} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
