class LoginPage {

    // method to visit the page
    visit() {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }

    // method to fill email
    fillEmail(value) {
        cy.get('input[name=Email]').clear().type(value)
        return this
    }

    // method to fill password
    fillPassword(value) {
        const field = cy.get('input[name=Password]')
        field.clear().type(value)
        return this
}

    // to click on login
    submit(){
        cy.get('[type=submit]').click()
        return this
    }
}
// to use this class in all testcases
// Syntax: export default $className
export default LoginPage