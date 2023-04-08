// import necessary react testing library helpers here
// import dependencies here 
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import jest
import '@testing-library/jest-dom/';

// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  //check that the counter message renders
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  const initialCount = screen.getByTestId('count');
  //get the current count of the counter
  const prev = initialCount.textContent;
  fireEvent.click(incrementButton);
  // now check the count again and see if it has incremented
  expect(initialCount).toHaveTextContent(Number(prev) + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  const initialCount = screen.getByTestId('count');
  const prev = initialCount.textContent;
  fireEvent.click(decrementButton);
  expect(initialCount).toHaveTextContent(Number(prev) - 1);
});
