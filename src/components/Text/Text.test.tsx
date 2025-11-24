import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text component', () => {
  test('renders input with placeholder', () => {
    render(<Text placeholder="Enter name" />);
    const input = screen.getByPlaceholderText('Enter name');
    expect(input).toBeVisible();
  });

  test('input is disabled when disabled prop is true', () => {
    render(<Text placeholder="Disabled" disabled />);
    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
    expect(input).toHaveStyle('opacity: 0.6');
  });
});
