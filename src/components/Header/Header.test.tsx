import { render, screen } from '@testing-library/react';
import Header from './Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => jest.fn()
}));

describe('Header component', () => {
  it('should render the title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/pos point/i);
    expect(titleElement).toBeInTheDocument();
  });
});

