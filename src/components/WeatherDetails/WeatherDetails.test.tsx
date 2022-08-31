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

  const temperatureText = screen.getByText('Partly sunny');
  expect(temperatureText).toBeInTheDocument();
});

test('Should render loading details when details are loading', () => {
  render(
    <WeatherDetails
      weatherInfo={{
        isLoading: true,
        hasError: false,
      }}
    />
  );

  const loaderBox = screen.getByTestId('loader');
  expect(loaderBox).toBeInTheDocument();

  const temperatureText = screen.getByText('Loading weather details');
  expect(temperatureText).toBeInTheDocument();
});

test('Should render error screen when error occurs', () => {
  render(
    <WeatherDetails
      weatherInfo={{
        isLoading: false,
        hasError: true,
      }}
    />
  );

  const errorIcon = screen.getByTestId('error-icon');
  expect(errorIcon).toBeInTheDocument();

  const temperatureText = screen.getByText(
    'Error while fetching Weather Details...'
  );
  expect(temperatureText).toBeInTheDocument();
});
