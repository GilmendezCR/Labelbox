class Project {

    newProjectButton(){
       return cy.get('.jss18 > .MuiButtonBase-root > .MuiButton-label').contains('New project')
    }
    projectInfoName(){
        return cy.get('#name')
    }
    projectInfoDescription(){
        return cy.get(':nth-child(2) > .MuiInputBase-root')
    }
    projectNextBtn(){
        return cy.get('.MuiToolbar-root > .MuiButton-root > .MuiButton-label')
    }
    projectNextBtnStepTwo(){
        return cy.get('.MuiButton-contained').contains('Next')
    }
    projectNextBtnStepThree(){
        return cy.contains('Next')
    }
    projectFinishBtn(){
        return cy.contains('Finish')
    }
    projectAddData(){
        return cy.contains('Example Nature Dataset').parents('tr').find('button')
    }
    editorSetup(){
        return cy.contains('Setup') 
    }
    editorConfirmButton(){
        return cy.contains('Confirm')
    }
    settingstab(){
        return cy.contains('Settings')
    }
    EraseProject(){
        cy.contains('Danger zone').click()
        cy.contains('Delete project').click()
        cy.contains('Confirm').click()
        return this
    }

   
}
export default Project