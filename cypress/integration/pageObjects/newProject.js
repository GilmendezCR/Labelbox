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
    projectSearchInput(){
        return cy.get('')
    }

   
}
export default Project