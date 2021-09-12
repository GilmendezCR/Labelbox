class Login {

    email(){
       return cy.get('input[type="email"]')
    }
    password(){
       return cy.get('input[type="password"]')
    }
    textVisible(){
        return cy.get('input[type="text"]')
    }
    logInButton(){
        return cy.get('.auth0-label-submit').contains('Log In')
    }
    LoggedIn(){
        cy.visit('https://app.labelbox.com/signin')
        cy.get('input[type="email"]').type('gilberto-247@hotmail.com')
        cy.get('input[type="password"]').type('Maxell1278.$')
        cy.get('.auth0-label-submit').contains('Log In').click()
        return this
    }
}
export default Login