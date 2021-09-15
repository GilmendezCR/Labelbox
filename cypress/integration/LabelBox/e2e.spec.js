/// <reference types = 'cypress' />
import Login from "../pageObjects/login";
import Project from "../pageObjects/newProject";
import editorEdit from "../pageObjects/editor";

describe('End to End testing', () => {
    const login = new Login();
    const project = new Project();
    const editor = new editorEdit();

beforeEach(()=>{
    login.LoggedIn()
})
    it('User is able to log in successfully', async () => {
    })
    it('User is able to create a new project e2e',  async () => {
        project.newProjectButton().click()
        project.projectInfoName().type('Adding a new project')
        project.projectInfoDescription().type('Adding a description for my new project')
        project.projectNextBtn().click()
        project.projectAddData().click()
        project.projectNextBtnStepTwo().click()
        project.editorSetup().click()
        editor.addObject().click()
        editor.selectObjectClass()
        editor.enterObjectClassName().type('Name1')
        cy.wait(3000)
        editor.addObject().click()
        cy.wait(3000)
        cy.get('.MuiSelect-root').siblings().click()
        cy.contains('Bounding box').click()
        editor.enterObjectClassName().type('Name2')
       /* project.editorConfirmButton().click()
        project.projectNextBtnStepThree().click()
        project.projectFinishBtn().click()
        project.settingstab().click()
        //project.settingsLabelEditor()
        project.eraseProject()*/
    })
})


