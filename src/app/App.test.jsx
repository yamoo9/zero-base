import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
  let expected = 7;
  render(<App numberOfButtons={expected} />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(expected);
});
