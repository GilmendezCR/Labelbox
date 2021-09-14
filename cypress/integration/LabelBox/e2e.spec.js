/// <reference types = 'cypress' />
import Login from "../pageObjects/login";
import Project from "../pageObjects/newProject";

describe('End to End testing', () => {
    const login = new Login();
    const project = new Project();
beforeEach(()=>{
    login.LoggedIn()
})
    it('User is able to log in successfully', () => {
    })
    it('User is able to create a new project',  async () => {
        project.newProjectButton().click()
        project.projectInfoName().type('Adding a new project')
        project.projectInfoDescription().type('Adding a description for my new project')
        project.projectNextBtn().click()
        project.projectAddData().click()
        project.projectNextBtnStepTwo().click()
        project.editorSetup().click()
        project.editorConfirmButton().click()
        project.projectNextBtnStepThree().click()
        project.projectFinishBtn().click()
        project.settingstab().click()
        project.EraseProject()
    })
   

})


