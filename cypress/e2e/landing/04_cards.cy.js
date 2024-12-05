import body from '../../fixtures/landing/cards.json';
const cards = body.cards;

describe('Testing Cards', () => {

    // Need to load the page before doing any tests
    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    })

    it('All cards present and visible', () => {
        cy.get('.card')
            .should('have.length', cards.length)
            .each(($card) => {
                cy.wrap($card)
                    .should('exist')
                    .and('be.visible');
            })
    });

    it('Cards SVG is visible', () => {
        cy.get('.avatar svg')
            .should('have.length', cards.length)
            .each(($card, index) => {
                cy.wrap($card)
                    .should('exist')
                    .and('be.visible');
            })
    });

    // Cannot guarantee the order of appearance, so using this instead of directly comparing by index
    it('Cards all present once, contains correct text', () => {

        /*

        Code for case where we cannot guarantee the order of the cards
        But I will assume that whatever order is given to the tests is the same order
        They will appear in

        // Will be used to make sure each card appears once and only once by removing from muteableCards once found
        let mutableCards = [...cards.map(card => card.name)];

        cy.get('.card-body h5')
            .should('have.length', cards.length)
            .each(($card) => {

                const innerText = $card.text().trim();

                // The text should be visible
                cy.wrap($card)
                    .should('be.visible');
                
                // Get the index of the text
                const cardIndex = mutableCards.indexOf(innerText);

                // Remove card if matched
                if (cardIndex !== -1) {
                    mutableCards.splice(cardIndex, 1);
                }
            })
            // Wait for async calls to finish before making assertion
            .then(() => {
                // Expect the cards to be empty if all were matched and removed, otherwise a card is a duplicate or contains incorrect innerText
                expect(mutableCards.length).to.equal(0, 'All cards present once and only once');
            })
        */

        // Assumes the order of cards matches the order that the cards appear in the DOM
        cy.get('.card-body h5')
            .should('have.length', cards.length)
        .each(($cardBody, idx) => {
            expect(cards[idx].name).to.equal($cardBody.text().trim())
        })
    });

    it('Cards redirect correctly', () => {

        /*
        Catching error on website caused by repetitive navigation
        .setup is called on one of the pages, but cypress navigates to a different page too quickly
        It is likely that the resource .setup is being called on now has a null value
        */
        Cypress.on('uncaught:exception', (err) => {
            if (err.message && err.message.includes('c(...).setup is not a function')) {
              return false;
            }
            return true;
        });

        cy.wrap(cards).each((card) => {

            cy.contains(card.name).click();
            cy.location('pathname').should('eq', card.link);
            // Navigate back to the homepage
            cy.go('back');
        });

    });
});