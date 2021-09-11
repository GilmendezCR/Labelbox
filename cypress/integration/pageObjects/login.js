class Login {

    email(){
       return cy.get('input[type="email"]');
    }
    password(){
       return cy.get('input[type="password"]');
    }
    textVisible(){
        return cy.get('input[type="text"]')
    }
    logInButton(){
        return cy.get('.auth0-label-submit').contains('Log In')
    }
}
export default Login