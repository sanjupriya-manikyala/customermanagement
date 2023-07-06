import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app with initial count', () => {
  const { getByText } = render(<App />);
  const countElement = getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText(/Increment/i);
  const countElement = getByText(/Count: 0/i);

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('Count: 1');
});
