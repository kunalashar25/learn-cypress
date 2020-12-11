/// <reference types="cypress"/>

describe('UI Elements',function(){

    // cypress will close alert automatically
    it('Working with Alerts',function(){
        // open webpage
        cy.visit("https://demoqa.com/alerts")

        // click on sign in to get alert window
        cy.get('#alertButton').click()       
    })

    // to perform operation on alerts we need to raise own events
    // Refer: https://docs.cypress.io/api/events/catalog-of-events.html#Event-Types

    it('Raising own Events',function(){
          // trigger event
          cy.on('window:alert',(str) => {
              expect(str).to.equal('You clicked a button')
          })
    })

    it('Working with Confirmation Alerts',function(){
        // another practice url: http://testautomationpractice.blogspot.com/

        // click on sign in to get alert window
        cy.get('#confirmButton').click()      
        
        // perform actions on alert
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Do you confirm action?')
        })

        // validate confirmation result
        cy.get("#confirmResult").should('be.visible').contains('You selected Ok')
    })
})