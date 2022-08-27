import { WeatherAPIResponse } from '../../../models/Weather';

export const weatherAPIResponse: WeatherAPIResponse = {
  lat: '51.50853N',
  lon: '0.12574W',
  elevation: 25,
  timezone: 'UTC',
  units: 'metric',
  current: {
    icon: 'partly_sunny',
    icon_num: 4,
    summary: 'Partly sunny',
    temperature: 17.5,
    wind: {
      speed: 1.1,
      angle: 106,
      dir: 'ESE',
    },
    precipitation: {
      total: 0,
      type: 'none',
    },
    cloud_cover: 47,
  },
  hourly: {
    data: [
      {
        date: '2022-08-27T08:00:00',
        weather: 'partly_sunny',
        icon: 4,
        summary: 'Partly sunny',
        temperature: 17.5,
        wind: {
          speed: 1.1,
          dir: 'ESE',
          angle: 106,
        },
        cloud_cover: {
          total: 47,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T09:00:00',
        weather: 'mostly_cloudy',
        icon: 5,
        summary: 'Mostly cloudy',
        temperature: 19.2,
        wind: {
          speed: 1.6,
          dir: 'ESE',
          angle: 107,
        },
        cloud_cover: {
          total: 64,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T10:00:00',
        weather: 'mostly_cloudy',
        icon: 5,
        summary: 'Mostly cloudy',
        temperature: 20.5,
        wind: {
          speed: 1.9,
          dir: 'ESE',
          angle: 108,
        },
        cloud_cover: {
          total: 71,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T11:00:00',
        weather: 'mostly_cloudy',
        icon: 5,
        summary: 'Mostly cloudy',
        temperature: 21.2,
        wind: {
          speed: 2.2,
          dir: 'E',
          angle: 98,
        },
        cloud_cover: {
          total: 77,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T12:00:00',
        weather: 'mostly_cloudy',
        icon: 5,
        summary: 'Mostly cloudy',
        temperature: 21.8,
        wind: {
          speed: 2.6,
          dir: 'E',
          angle: 86,
        },
        cloud_cover: {
          total: 79,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T13:00:00',
        weather: 'mostly_cloudy',
        icon: 5,
        summary: 'Mostly cloudy',
        temperature: 22,
        wind: {
          speed: 2.6,
          dir: 'NE',
          angle: 52,
        },
        cloud_cover: {
          total: 78,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T14:00:00',
        weather: 'mostly_cloudy',
        icon: 5,
        summary: 'Mostly cloudy',
        temperature: 22.2,
        wind: {
          speed: 2.5,
          dir: 'NNE',
          angle: 31,
        },
        cloud_cover: {
          total: 73,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T15:00:00',
        weather: 'partly_sunny',
        icon: 4,
        summary: 'Partly sunny',
        temperature: 22.5,
        wind: {
          speed: 2.4,
          dir: 'NE',
          angle: 51,
        },
        cloud_cover: {
          total: 49,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T16:00:00',
        weather: 'partly_sunny',
        icon: 4,
        summary: 'Partly sunny',
        temperature: 22.8,
        wind: {
          speed: 2.2,
          dir: 'ENE',
          angle: 57,
        },
        cloud_cover: {
          total: 42,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T17:00:00',
        weather: 'mostly_cloudy',
        icon: 5,
        summary: 'Mostly cloudy',
        temperature: 22.8,
        wind: {
          speed: 1.9,
          dir: 'ENE',
          angle: 69,
        },
        cloud_cover: {
          total: 61,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T18:00:00',
        weather: 'mostly_cloudy',
        icon: 5,
        summary: 'Mostly cloudy',
        temperature: 22.5,
        wind: {
          speed: 1.8,
          dir: 'E',
          angle: 97,
        },
        cloud_cover: {
          total: 68,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T19:00:00',
        weather: 'mostly_cloudy',
        icon: 29,
        summary: 'Mostly cloudy',
        temperature: 21.2,
        wind: {
          speed: 1.6,
          dir: 'E',
          angle: 93,
        },
        cloud_cover: {
          total: 62,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T20:00:00',
        weather: 'clear',
        icon: 26,
        summary: 'Clear',
        temperature: 19.8,
        wind: {
          speed: 2.7,
          dir: 'E',
          angle: 97,
        },
        cloud_cover: {
          total: 8,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T21:00:00',
        weather: 'clear',
        icon: 26,
        summary: 'Clear',
        temperature: 18.5,
        wind: {
          speed: 2.6,
          dir: 'E',
          angle: 91,
        },
        cloud_cover: {
          total: 8,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T22:00:00',
        weather: 'mostly_clear',
        icon: 27,
        summary: 'Mostly clear',
        temperature: 17.5,
        wind: {
          speed: 1.8,
          dir: 'E',
          angle: 80,
        },
        cloud_cover: {
          total: 14,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-27T23:00:00',
        weather: 'mostly_clear',
        icon: 27,
        summary: 'Mostly clear',
        temperature: 16.8,
        wind: {
          speed: 1.3,
          dir: 'ENE',
          angle: 75,
        },
        cloud_cover: {
          total: 16,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-28T00:00:00',
        weather: 'mostly_cloudy',
        icon: 29,
        summary: 'Mostly cloudy',
        temperature: 16.2,
        wind: {
          speed: 1.1,
          dir: 'ENE',
          angle: 68,
        },
        cloud_cover: {
          total: 53,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-28T01:00:00',
        weather: 'clear',
        icon: 26,
        summary: 'Clear',
        temperature: 15.8,
        wind: {
          speed: 1.1,
          dir: 'ENE',
          angle: 64,
        },
        cloud_cover: {
          total: 2,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-28T02:00:00',
        weather: 'clear',
        icon: 26,
        summary: 'Clear',
        temperature: 15.2,
        wind: {
          speed: 1.3,
          dir: 'ENE',
          angle: 60,
        },
        cloud_cover: {
          total: 0,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-28T03:00:00',
        weather: 'clear',
        icon: 26,
        summary: 'Clear',
        temperature: 14.8,
        wind: {
          speed: 1.3,
          dir: 'NE',
          angle: 56,
        },
        cloud_cover: {
          total: 0,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-28T04:00:00',
        weather: 'clear',
        icon: 26,
        summary: 'Clear',
        temperature: 14.5,
        wind: {
          speed: 1.3,
          dir: 'NE',
          angle: 56,
        },
        cloud_cover: {
          total: 4,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-28T05:00:00',
        weather: 'mostly_sunny',
        icon: 3,
        summary: 'Mostly sunny',
        temperature: 14,
        wind: {
          speed: 1.4,
          dir: 'NE',
          angle: 52,
        },
        cloud_cover: {
          total: 11,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-28T06:00:00',
        weather: 'sunny',
        icon: 2,
        summary: 'Sunny',
        temperature: 14.2,
        wind: {
          speed: 1.4,
          dir: 'NE',
          angle: 51,
        },
        cloud_cover: {
          total: 0,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
      {
        date: '2022-08-28T07:00:00',
        weather: 'mostly_sunny',
        icon: 3,
        summary: 'Mostly sunny',
        temperature: 15.2,
        wind: {
          speed: 1.6,
          dir: 'ENE',
          angle: 59,
        },
        cloud_cover: {
          total: 18,
        },
        precipitation: {
          total: 0,
          type: 'none',
        },
      },
    ],
  },
  daily: {
    data: [
      {
        day: '2022-08-27',
        weather: 'mostly_cloudy',
        icon: 5,
        summary:
          'Mostly cloudy, fewer clouds in the evening. Temperature 15/23 °C.',
        all_day: {
          weather: 'mostly_cloudy',
          icon: 5,
          temperature: 19,
          temperature_min: 15,
          temperature_max: 22.8,
          wind: {
            speed: 1.4,
            dir: 'E',
            angle: 95,
          },
          cloud_cover: {
            total: 51,
          },
          precipitation: {
            total: 0,
            type: 'none',
          },
        },
        morning: null,
        afternoon: null,
        evening: null,
      },
    ],
  },
};

export const formattedWeatherDetails = {
  current: {
    icon: 4,
    summary: 'Partly sunny',
    temperature: 17.5,
    wind: {
      speed: 1.1,
      angle: 106,
      dir: 'ESE',
    },
  },
  daily: [
    {
      day: new Date('2022-08-27'),
      weather: 'mostly_cloudy',
      icon: 5,
      summary:
        'Mostly cloudy, fewer clouds in the evening. Temperature 15/23 °C.',
      temperature: 19,
      temperature_min: 15,
      temperature_max: 22.8,
      wind: {
        speed: 1.4,
        dir: 'E',
        angle: 95,
      },
    },
  ],
};
