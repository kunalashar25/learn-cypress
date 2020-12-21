/// <reference types="cypress"/>

describe('Using Customized Commands', function () {

    // using before hook to load data from fixtures
    before(function () {
        cy.fixture('example').then(function (data) {
            // this refers to the class object same as java
            // no need to create additional varaible outside of the block
            this.data = data
        })
    })

    it('Working with Custom Commands', function () {
        cy.login(this.data.email, this.data.password)
    })
})