/// <reference types="cypress"/>

describe('UI Elements',function(){

    it('Working with Radio Button',function(){
        // open webpage
        cy.visit("http://demo.guru99.com/test/newtours/reservation.php")

        // verify page title
        cy.title().should('contain','Find a Flight')

        // round trip radio button
        cy.get('[value=roundtrip]').should('be.visible').should('be.checked')

        // one way radio button
        cy.get('[value=oneway]').should('be.visible').should('not.be.checked').click()

        // click on continue
        cy.get('[name=findFlights]').should('be.enabled').click()
    })
})