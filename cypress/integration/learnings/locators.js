// Syntax: cy.get(cssSelector)
// gets one or more DOM elements

// this statement will help to get proper auto-suggestions
/// <reference types="cypress"/>

describe('Locators',function(){

    it('Working with Webpage Elements',function(){
        // open webpage
        cy.visit("https://demo.nopcommerce.com/")

        // locate and type in textbox
        cy.get(".search-box-text").type("Apple MacBook Pro 13-inch")

        // click on Search button
        cy.get("input[type='submit']").click()

        // click on add to cart button from product listings
        cy.get(".product-box-add-to-cart-button").click()

        // update item quantity
        cy.get(".qty-input").clear().type("3")

        // click on add to cart from product page
        cy.get(".add-to-cart-button").click()

        // verify banner is displayed with text
        cy.get("#bar-notification .content").should('be.visible').should('have.text','The product has been added to your shopping cart')

        // open shopping cart
        cy.get("#bar-notification .content a").click()

        // verify product price
        cy.get(".product-unit-price").contains("$1,800.00")
    })
})