/// <reference types="cypress"/>

// to use class in testcase
import LoginPage from '../pageObjectModel/loginPage'

describe('Page Object Model', function () {

    it('POM Test', function () {
        const loginPage = new LoginPage()
    
        loginPage.visit()
        loginPage.fillEmail('testemail')
        loginPage.fillPassword('password')
        loginPage.submit()
    })
})