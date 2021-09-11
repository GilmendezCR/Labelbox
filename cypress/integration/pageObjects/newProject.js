class Project {

    newProjectButton(){
       return cy.get('.jss18 > .MuiButtonBase-root > .MuiButton-label').contains('New project')
    }
   
}
export default Project