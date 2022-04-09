import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Satyamev Jayate in header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Satyamev Jayate/i);
  expect(linkElement).toBeInTheDocument();
});
