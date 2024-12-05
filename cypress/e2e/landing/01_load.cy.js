describe('Landing Page Loads', () => {

  // First test case in all e2e tests: page must load for all test to move forward
  it('Page Loads', () => {
    cy.visit('https://demoqa.com/');
  });

});