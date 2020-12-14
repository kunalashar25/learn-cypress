/// <reference types="cypress"/>

describe('Using Fixtures Data',function(){

    // using before hook to load data from fixtures
    before(function(){
        cy.fixture('example').then(function(data){
            // this refers to the class object same as java
            // no need to create additional varaible outside of the block
            this.data = data
        })
    })

    it('Working with Fixtures',function(){
        // open page
        cy.visit('https://admin-demo.nopcommerce.com/login')

        // fill username
        cy.get('input[name=Email]').clear().type(this.data.email)

        // fill password
        cy.get('input[name=Password]').clear().type(this.data.password)

        // click on login
        cy.get('[type=submit]').click()
    })
})