describe('Website actually works', () => {
   it('Should load the page', () => {
       cy.visit('http://localhost:3000/#/')
   })
})

describe('User can Navigate Events', () => {
   it('Should be able to click Browse Events', () => {
        cy.get('.navbar-nav li:nth-child(2) a')
        .click()
   })

   it('Should be able to type in search box', () => {
        cy.get('input[name="filterTitles"]')
        .click()
        .type('dallas')
    })

    it('Should be able to click search', () => {
        cy.get('.browse-form button[type="submit"]')
        .click()
        })
    
    it('Should be able to clear search', () => {
        cy.get('.browse-form button[type="button"]')
        .click()
        })

})