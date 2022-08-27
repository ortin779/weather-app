import { AsyncState } from '../../hooks/use-async';
import { WeatherInfo } from '../../models/Weather';

type WeatherDetailsProps = {
  weatherInfo?: AsyncState<WeatherInfo | undefined>;
};
export const WeatherDetails = ({ weatherInfo }: WeatherDetailsProps) => {
  return (
    <div className="detailsCard">
      <h4>Temperature : {weatherInfo?.result?.current.temperature}</h4>
      <div></div>
      <div></div>
    </div>
  );
};
