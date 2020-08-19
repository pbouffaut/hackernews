import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders UI correctly', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('input-search')).toBeInTheDocument();
  fireEvent.change(getByTestId('input-search'), { target: { value: 'test' } });

  expect(getByTestId('loading')).toBeInTheDocument();
});
