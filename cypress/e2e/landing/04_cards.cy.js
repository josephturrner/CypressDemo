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
            .each(($card) => {
                cy.wrap($card)
                    .should('exist')
                    .and('be.visible');
            })
    });

    // Cannot guarantee the order of appearance, so using this instead of directly comparing by index
    it('Cards all present once, contains correct text', () => {

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
    });


    // TODO: click prevents dom from tracking $card, fails
    it.only('Cards redirects correctly, links are unique', () => {

        // Same principle as previous `it` block
        let mutableLinks = [...cards.map(card => card.link)];

        cy.get('.card')
            .should('have.length', cards.length)
            .each(($card) => {

                cy.wrap($card).click();

                // Get new pathname
                cy.location('pathname').then((currentPathname) => {

                    // Assert current path is included in the links array
                    expect(mutableLinks).to.include(currentPathname, `Expected ${currentPathname} to be in mutableLinks`);

                    // Check if the pathname matches what we expect
                    const linkIndex = mutableLinks.indexOf(currentPathname);

                    if (linkIndex !== -1) {
                        // Remove matched link to avoid duplicates
                        mutableLinks.splice(linkIndex, 1);
                    }
            })
        })
        .then(() => {
            // Expect mutableLinks to be empty if all links were matched and removed
            expect(mutableLinks.length).to.equal(0, 'All card links redirected correctly and are unique');
        });
    });
});