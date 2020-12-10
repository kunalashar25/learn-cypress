describe('My First Web Suite',function(){

    // it denotes testcase in Cypress.
    it('My First Pass Web Test',function(){
        
        // cy is cypress inbuilt keyword to perform web actions
        // visit the page
        cy.visit('https://example.cypress.io/commands/actions')
        cy.title().should('eq','Cypress.io: Kitchen Sink')
    })

    it('My First Fail Web Test',function(){
        
        // cy is cypress inbuilt keyword to perform web actions
        // visit the page
        cy.visit('https://example.cypress.io/commands/actions')
        cy.title().should('eq','Cypress.io Kitchen Sink')
    })
})