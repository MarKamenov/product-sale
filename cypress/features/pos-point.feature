Feature: Point-of-Sale Application

  Scenario: Selecting a Cashier
    Given I am on the "Select Cashier" view
    When I see a list of predefined cashiers
    Then I should be able to select a cashier
    And I should be redirected to the "Sales Dashboard" view with the selected cashier's information displayed

  Scenario: Adding a Sale
    Given I am on the "Sales Dashboard" view
    When I click the "Add Sale" button
    Then I should be redirected to the "Add Sale" view
    And I should be able to add a sale
    And I should be redirected to the "Sales Dashboard" view with the new sale displayed