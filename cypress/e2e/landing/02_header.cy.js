import header from '../../fixtures/landing/header.json';

describe('Testing Header', () => {

    // Need to load the page before doing any tests
    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    })

    it('Header image exists, correct image, is visible', () => {
        // Verify image
        cy.get('header img')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'src', header.img);
    });

    it('Header link exists, is clickable, redirects correctly', () => {
        
        // Intercept the request to make sure redirect actually occurs
        cy.intercept('GET', header.href).as('homepageRedirect');
        
        // Verify link
        cy.get('header a')
            .should('exist')
            .and('have.attr', 'href', header.href)
            .click();

        // Check for redirect & 200 success status code
        cy.wait('@homepageRedirect')
            .its('response.statusCode')
            .should('eq', 200);
    });
});