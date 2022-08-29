import {
  getFormattedLocationName,
  translateWeatherResponse,
} from '../../utils/weatherDetails';
import {
  formattedWeatherDetails,
  locationDetails,
  weatherAPIResponse,
} from '../testData/utils/weatherDetails';

describe('TranslateWeatherResponse', () => {
  it('Should return formatted Weather Details from api response', () => {
    expect(translateWeatherResponse(weatherAPIResponse)).toEqual(
      formattedWeatherDetails
    );
  });
});

describe('getFormattedLocationName', () => {
  it('should return formatted location name for given LocationAPIResponse', () => {
    const expectedLocationName = 'Hindupur, Anantapur, Andhra Pradesh, India';

    expect(getFormattedLocationName(locationDetails)).toEqual(
      expectedLocationName
    );
  });

  it('should return formatted location name as empty string when locationDetails are undefined', () => {
    expect(getFormattedLocationName(undefined)).toEqual('');
  });
});
