
import { render, screen } from '@testing-library/react';
import Sale from './Sale';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe('Add a sale', () => {
  it('should render the title', () => {
    // Arrange
    // Act
    // Assert
  });

});


