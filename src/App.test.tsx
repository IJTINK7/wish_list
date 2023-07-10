import React from 'react';
import { render, screen } from '@testing-library/react';
import {AppWithRedux} from './AppWithRedux';

test('renders learn react link', () => {
  render(<AppWithRedux />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
