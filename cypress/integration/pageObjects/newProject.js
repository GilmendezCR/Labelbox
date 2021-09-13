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
    projectAddData(){
        return cy.contains('Example Nature Dataset').parents('tr').find('button')
    }
    projectNextBtnStepTwo(){
        return cy.get('.MuiButton-contained').contains('Next')
    }

   
}
export default Project