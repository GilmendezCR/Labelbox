/// <reference types = 'cypress' />
import Login from "../pageObjects/login";
import Project from "../pageObjects/newProject";

describe('End to End testing', () => {
    const login = new Login();
    const project = new Project();

    it('User is able to log in successfully', () => {
        cy.visit('https://app.labelbox.com/signin')
        login.email().type('gilberto-247@hotmail.com') //remember to move this to env
        login.password().type('Maxell1278.$')
        login.logInButton().click()
    })
    it('User is able to create a new project',() => {
        login.LoggedIn()
        project.newProjectButton().click()
        project.projectInfoName().type('Adding a new project')
        project.projectInfoDescription().type('Adding a description for my new project')
        project.projectNextBtn().click()
        project.projectSearchInput().type('Example Nature Dataset{enter}')
        //cy.contains('Attach').click()

    })



})


