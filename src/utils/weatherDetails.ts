import {
  LocationAPIResponse,
  WeatherAPIResponse,
  WeatherInfo,
} from '../models/Weather';

export const translateWeatherResponse = (
  data: WeatherAPIResponse
): WeatherInfo => {
  const dailyWeatherDetails: WeatherInfo['daily'] = data.daily.data.map(
    (allDayDetails) => {
      return {
        day: new Date(allDayDetails.day),
        temperature: allDayDetails.all_day.temperature,
        temperature_min: allDayDetails.all_day.temperature_min,
        temperature_max: allDayDetails.all_day.temperature_max,
        weather: allDayDetails.weather,
        summary: allDayDetails.summary,
        wind: allDayDetails.all_day.wind,
        icon: allDayDetails.icon,
      };
    }
  );

  return {
    current: {
      icon: data.current.icon_num,
      summary: data.current.summary,
      temperature: data.current.temperature,
      wind: data.current.wind,
    },
    daily: dailyWeatherDetails,
  };
};

export function getFormattedLocationName(
  locationDetails?: LocationAPIResponse
) {
  if (!locationDetails) return '';
  const { name, adm_area1, adm_area2, country } = locationDetails;

  return [name, adm_area2, adm_area1, country].join(', ');
}
