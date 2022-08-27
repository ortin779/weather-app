interface CurrentWeatherInfo {
  icon: number;
  summary: string;
  temperature: number;
  wind: {
    speed: number;
    angle: number;
    dir: string;
  };
}

interface DailyForcast extends CurrentWeatherInfo {
  day: Date;
  weather: string;
  temperature_min: number;
  temperature_max: number;
}

export type WeatherInfo = {
  current: CurrentWeatherInfo;
  daily: DailyForcast[];
};

type AllDayDetails = Omit<DailyForcast, 'day'> & {
  date: string;
  precipitation: {
    total: number;
    type: string;
  };
  cloud_cover: {
    total: number;
  };
};

export interface WeatherAPIResponse {
  lat: string;
  lon: string;
  elevation: number;
  timezone: string;
  units: string;
  current: Omit<CurrentWeatherInfo, 'icon'> & {
    icon: string;
    icon_num: number;
    precipitation: {
      total: number;
      type: string;
    };
    cloud_cover: number;
  };
  hourly: {
    data: Omit<AllDayDetails, 'temperature_max' | 'temperature_min'>[];
  };
  daily: {
    data: {
      day: string;
      weather: string;
      icon: number;
      summary: string;
      all_day: Omit<AllDayDetails, 'summary' | 'date'>;
      morning: unknown;
      evening: unknown;
      afternoon: unknown;
    }[];
  };
}

export type LocationAPIResponse = {
  name: string;
  place_id: string;
  adm_area1: string;
  adm_area2: string;
  country: string;
  lat: string;
  lon: string;
  timezone: string;
  type: string;
};
