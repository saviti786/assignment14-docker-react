import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button component', () => {
  test('renders the button with correct label', () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeVisible();
  });

  test('applies disabled styles when disabled is true', () => {
    render(<Button label="Disabled" disabled backgroundColor="#007bff" />);
    const buttonElement = screen.getByText('Disabled');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle('opacity: 0.6');
  });
});
