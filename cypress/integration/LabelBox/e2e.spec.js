/// <reference types = 'cypress' />
import Login from "../pageObjects/login";

describe('End to End testing', () => {
    const login = new Login();

    it('User is able to log in successfully', () => {
        cy.visit('https://app.labelbox.com/signin')
        login.email().type('gilberto-247@hotmail.com') //remember to move this to env
        login.password().type('Maxell1278.$')
        login.logInButton().click()
    })



})


