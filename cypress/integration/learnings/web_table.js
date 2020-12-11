/// <reference types="cypress"/>

describe('UI Elements',function(){

    it('Working with Web Tables',function(){
        // open webpage
        cy.visit("http://testautomationpractice.blogspot.com/")

        // check value present anywhere in the table
        cy.get('table[name=BookTable]').contains('td','Master In Java').should('be.visible')

        // check value present based on condition by iterating the rows
        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each((e, index, list) => {

            const text = e.text()
            if(text.includes("Amod")){
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){
                    const bookName = bname.text()
                    expect(bookName).to.equal('Master In Java')
                })
            }

        })

    })
})