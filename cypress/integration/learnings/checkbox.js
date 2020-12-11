/// <reference types="cypress"/>

describe('UI Elements',function(){

    it('Working with Checkbox',function(){
        // open webpage
        cy.visit("http://demo.automationtesting.in/Register.html")

        // verify page title
        cy.title().should('eq','Register')

        //  action on first checkbox
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')

        //  action on second checkbox
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')

        //  action on third checkbox
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        // Unchecking single checkbox
        cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value','Cricket')

        // unchecking multiple checkbox
        cy.get('[type=checkbox]').uncheck(['Movies','Hockey']).should('not.be.checked')
    })
})