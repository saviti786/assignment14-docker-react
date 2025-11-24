import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

const headers = ['Name', 'Age'];
const data = [
  ['Alice', '25'],
  ['Bob', '30'],
];
// const footer = ['Total', '2'];

describe('Table component', () => {
  test('renders headers', () => {
    render(<Table headers={headers} data={data} />);
    expect(screen.getByText('Name')).toBeVisible();
    expect(screen.getByText('Age')).toBeVisible();
  });

  test('applies disabled style', () => {
    render(<Table headers={headers} data={data} disabled />);
    const table = screen.getByRole('table');
    expect(table).toHaveStyle('opacity: 0.6');
  });
});
