describe('Website actually works', () => {
    it('Should load the page', () => {
        cy.visit('http://localhost:3000/#/')
    })
})

describe('Navigate to browse events page', () => {
    it('Should be able to click browse more', () => {
        cy.get('#browse-more')
        .click()
    })
})

describe('Should be able to type', () => {
    it('Should be able to type into input', () => {
        cy.get('input[name=filterTitles]')
        .type('sup')
        .should('have.value', 'sup')
    })
})

describe('Navigate to My Events page', () => {
    it('Should be able to click My Events', () => {
        cy.get('.navbar-nav li:nth-child(3) a')
        .click()
    })
})

describe('Navigate to back to home', () => {
    it('Should be able to click Home', () => {
        cy.get('.navbar-nav li:nth-child(1) a')
        .click()
    })
})

