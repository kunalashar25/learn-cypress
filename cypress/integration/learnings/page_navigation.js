/// <reference types="cypress"/>

describe('UI Navigation',function(){

    // SYNTAX to go back
    // cy.go('back') OR cy.go(-1)

    // SYNTAX to go forward
    // cy.go('forward') OR cy.go(1)


    it('Working with Page Navigation',function(){
        // open webpage
        cy.visit("https://demo.nopcommerce.com/")

        // validate home page title
        cy.title().should('eq','nopCommerce demo store')

        // click on register link
        cy.get('.ico-register').contains('Reg').click()

        // validate register page title
        cy.title().should('eq','nopCommerce demo store. Register')

        // navigate back to home page and verify title
        cy.go('back')
        cy.title().should('eq','nopCommerce demo store')

        // navigate forward and verify title
        cy.go('forward')
        cy.title().should('eq','nopCommerce demo store. Register')

        // navigate back to home page with index and verify title
        cy.go(-1)
        cy.title().should('eq','nopCommerce demo store')

        // navigate forward with index and verify title
        cy.go(1)
        cy.title().should('eq','nopCommerce demo store. Register')
        
        // reload the page
        cy.reload()
    })
})