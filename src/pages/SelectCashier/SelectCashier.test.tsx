
import { render, screen } from '@testing-library/react';
import SelectCashier from './SelectCashier';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe('Select Cashier', () => {
  it('should render the title', () => {
    render(<SelectCashier />);
    const titleElement = screen.getByText(/Select a Cashier/i);
    expect(titleElement).toBeInTheDocument();
  });

});


