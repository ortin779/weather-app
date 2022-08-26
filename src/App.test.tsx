import { render, screen } from '@testing-library/react';
import App from './App';

test('should render Weather App title', () => {
  render(<App />);
  const title = screen.getByText(/Weather App/i);
  expect(title).toBeInTheDocument();
});
