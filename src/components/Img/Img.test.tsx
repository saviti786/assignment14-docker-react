import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

describe('Img component', () => {
  test('renders image with alt text', () => {
    render(<Img src="/storybook/happy.jpg" alt="Stay Happy" />);
    const image = screen.getByAltText('Stay Happy');
    expect(image).toBeVisible();
  });

  test('applies disabled style', () => {
    render(<Img src="/storybook/happy.jpg" alt="Stay Happy" disabled />);
    const image = screen.getByAltText('Stay Happy');
    expect(image).toHaveStyle('opacity: 0.6');
  });
});
