describe('My First Web Suite',function(){

    // it denotes testcase in Cypress.
    it('My First Pass Web Test',function(){
        
        // cy is cypress inbuilt keyword to perform web actions
        // visit the page
        cy.visit('https://example.cypress.io/commands/actions')
        cy.title().should('eq','Cypress.io: Kitchen Sink')
    })

    it('My First Fail Web Test',function(){
        
        // cy is cypress inbuilt keyword to perform web actions
        // visit the page
        cy.visit('https://example.cypress.io/commands/actions')
        cy.title().should('eq','Cypress.io Kitchen Sink')
    })

    /**
     * HOW TO EXECUTE?
     */

    // to open CYPRESS RUNNER
    // node_modules/.bin/cypress open

    // to run from TERMINAL
    // node_modules/.bin/cypress run (default behavior is headless mode)
    // this command will run all the js under example folder on Electron Browser

    // to run with HEADED mode (with open browser)
    // node_modules/.bin/cypress run --headed

    // to run SPECIFIC FILE
    // node_modules/.bin/cypress run --spec "cypress/integration/learnings/first_webpage_test.js"

    // to run on CHROME browser
    // node_modules/.bin/cypress run --browser chrome
    // chrome browser is by default in headed mode

    // Refer for more COMMAND LINE commands
    // https://docs.cypress.io/guides/guides/command-line.html#cypress-run
})