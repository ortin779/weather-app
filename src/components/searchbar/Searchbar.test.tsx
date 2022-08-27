import { fireEvent, render, screen } from '@testing-library/react';
import { Searchbar } from './Searchbar';

const searchChangeMock = jest.fn();

test('should render inputBox', () => {
  render(<Searchbar onSearchKeyChange={searchChangeMock} />);

  const locationInput = screen.getByTestId('locationInput');

  expect(locationInput).toBeInTheDocument();
  expect(locationInput).toHaveValue('');

  fireEvent.change(locationInput, { target: { value: 'India' } });
  expect(locationInput).toHaveValue('India');
});

test('should call seachChageMock on click of search', () => {
  render(<Searchbar onSearchKeyChange={searchChangeMock} />);

  const locationInput = screen.getByTestId('locationInput');

  expect(locationInput).toBeInTheDocument();
  fireEvent.change(locationInput, { target: { value: 'India' } });

  const searchButton = screen.getByTestId('searchButton');

  fireEvent.click(searchButton);

  expect(searchChangeMock).toHaveBeenNthCalledWith(1, 'India');
});

test('should clear input value onClick of clear', () => {
  render(<Searchbar onSearchKeyChange={searchChangeMock} />);

  const locationInput = screen.getByTestId('locationInput');

  expect(locationInput).toBeInTheDocument();
  fireEvent.change(locationInput, { target: { value: 'India' } });

  const clearButton = screen.getByTestId('clearButton');

  fireEvent.click(clearButton);

  expect(searchChangeMock).toHaveBeenNthCalledWith(1, '');
});
