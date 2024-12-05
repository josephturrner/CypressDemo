describe('homepage load', () => {

  // First test case in all e2e tests: page must load for all test to move forward
  it('homepage loads', () => {
    cy.visit('https://demoqa.com/');
  });

});