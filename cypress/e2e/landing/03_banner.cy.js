import banner from '../../fixtures/landing/banner.json';

describe('Testing Banner', () => {

    // Need to load the page before doing any tests
    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    })

    it('Banner image exists, correct image, is visible', () => {
        cy.get('.banner-image')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'src', banner.img);
    });

    it('Banner link exists, is clickable, redirects correctly', () => {

        // Verify link
        cy.get('.home-banner a')
            .should('exist')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'href', banner.href);
    });
});