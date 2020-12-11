/// <reference types="cypress"/>

describe('Mocha Hooks',function(){

    before(function(){
        cy.log('before')
    })

    after(function(){
        cy.log('after')
    })

    beforeEach(function(){
        cy.log('beforeEach')
    })

    afterEach(function(){
        cy.log('afterEach')
    })

    // testcase 1
    it('Test1',function(){
        cy.log('from test 1')
    })

    // testcase 2
    it('Test2',function(){
        cy.log('from test 2')
    })

    // testcase 3
    it('Test3',function(){
        cy.log('from test 3')
    })
})