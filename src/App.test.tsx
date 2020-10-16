import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { AboutPage } from './pages/About';
import { RegistrationPage } from './pages/Register';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Project Math/i);
  expect(titleElement).toBeInTheDocument();
})

test('renders about page', () => {
  const { getByText } = render(<AboutPage/>)
  const element = getByText(/About Project Math/i)
  expect(element).toBeInTheDocument()
})

test('renders registration page', () => {
  const { getAllByText, getByLabelText } = render(<RegistrationPage/>)
  const [titleElement, registerButton] = getAllByText(/Register/i)
  expect(titleElement).toBeInTheDocument()
  expect(registerButton).toBeInTheDocument()

  const usernameInput = getByLabelText(/Username/)
  expect(usernameInput).toBeInTheDocument()

  const passwordInput = getByLabelText(/^Password/)
  expect(passwordInput).toBeInTheDocument()

  const confirmPasswordInput = getByLabelText(/Confirm Password/)
  expect(confirmPasswordInput).toBeInTheDocument()
})
