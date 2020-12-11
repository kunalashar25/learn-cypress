/// <reference types="cypress"/>

describe('UI Elements',function(){

    it('Working with Dropdown',function(){
        // open webpage
        cy.visit("http://demo.automationtesting.in/Register.html")

        // verify page title
        cy.title().should('eq','Register')

        // selecting value from dropdown
        cy.get('#Skills').select('Android').should('have.value','Android')
    })

    it('Working with Multi Select',function(){
        // open multi-select dropdown
        cy.get('#msdd').click()

        // select languages
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Danish').click()
    })

    it('Working with Search Dropdown',function(){
        // click on dropdown
        // {force:true} will forcefully click on an element if it is hidden cause of some other element.
        cy.get('[role=combobox]').click({force:true})

        // locate textbox inside dropdown and select value
        cy.get('.select2-search__field').type('Ind').type('{enter}')
    })
})