import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio with Matteo brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/MatteoEspo/i);
  expect(brandElement).toBeInTheDocument();
});
