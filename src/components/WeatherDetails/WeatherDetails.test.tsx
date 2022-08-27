import { render, screen } from '@testing-library/react';
import { formattedWeatherDetails } from '../../tests/testData/utils/weatherDetails';
import { WeatherDetails } from './WeatherDetails';

test('Should render Weather details', () => {
  render(
    <WeatherDetails
      weatherInfo={{
        isLoading: false,
        hasError: false,
        result: formattedWeatherDetails,
      }}
    />
  );

  const temperatureText = screen.getByText('Temperature : 17.5');
  expect(temperatureText).toBeInTheDocument();
});
