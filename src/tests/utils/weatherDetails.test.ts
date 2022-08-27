import { translateWeatherResponse } from '../../utils/weatherDetails';
import {
  formattedWeatherDetails,
  weatherAPIResponse,
} from '../testData/utils/weatherDetails';

it('Should return formatted Weather Details from api response', () => {
  expect(translateWeatherResponse(weatherAPIResponse)).toEqual(
    formattedWeatherDetails
  );
});
