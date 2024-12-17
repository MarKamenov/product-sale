
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe('Dashboard', () => {
  it('should render the title', () => {
    // Arrange
    // Act
    // Assert
  });

});


