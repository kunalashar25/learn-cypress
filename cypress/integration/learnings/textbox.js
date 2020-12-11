/// <reference types="cypress"/>

describe('UI Elements',function(){

    it('Working with Textbox',function(){
        // open webpage
        cy.visit("http://demo.guru99.com/test/newtours/index.php")

        // current page url validation
        cy.url().should('include','newtours')

        // username box
        cy.get("[name='userName']").should('be.visible').should('be.enabled').type('mercury')

        // password box
        cy.get("[name=password]").should('be.visible').should('be.enabled').type('mercury')

        // sign in button
        cy.get("[name=submit]").should('be.visible').should('be.enabled').click()

        // verify page title
        cy.title().should('eq','Login: Mercury Tours')
    })
})