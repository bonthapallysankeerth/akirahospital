import { render, screen } from '@testing-library/react';
import App from './App';

test('renders clinic hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/Healthy Kids/i);
  expect(heading).toBeInTheDocument();
});
