import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { AboutPage } from './pages/About';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Project Math/i);
  expect(titleElement).toBeInTheDocument();
})

test('renders', () => {
  const { getByText } = render(<AboutPage/>)
  const element = getByText(/About Project Math/i)
  expect(element).toBeInTheDocument()
})
