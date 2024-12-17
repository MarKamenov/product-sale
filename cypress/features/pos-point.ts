import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the {string} view', (view: string) => {
  cy.visit('http://localhost:3000/');
});

When('I see a list of predefined cashiers', () => {
  cy.get('.cashiers-list').should('be.visible');
});

Then('I should be able to select a cashier', () => {
  cy.get('.cashiers-list').find('[data-test-id="cashier-1"]').click();
});

Then("I should be redirected to the {string} view with the selected cashier's information displayed", (view: string) => {
  cy.url().should('include', '/dashboard');
  cy.get('[data-test-id="casher-name"]').should('be.visible').and('contain', 'Cashier');
});

When(`I click the "Add Sale" button`, () => {
  cy.get('.cashiers-list').find('[data-test-id="cashier-1"]').click();
  cy.get('[data-test-id="add-sale"]').click();
});
Then(`I should be redirected to the "Add Sale" view`, () => {
  cy.url().should('include', '/sale');
});
Then(`I should be able to add a sale`, () => {
  cy.get(`[data-test-id="select-product"]`).click();
  cy.get(`[data-test-id="1"]`).click();
  cy.get('[data-test-id="add-item"]').click();
  cy.get('[data-test-id="quantity"]').find('input').type('20');
  cy.get('[data-test-id="submit-sale"]').click();
});
Then(`I should be redirected to the "Sales Dashboard" view with the new sale displayed`, () => {
  cy.url().should('include', '/dashboard');
});
