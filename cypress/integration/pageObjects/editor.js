class editorEdit{

    addObject(){
        cy.wait(3000)
        return cy.get('.MuiButton-label').contains('Add object')
    }
    selectObjectClass(){
        cy.wait(3000)
        cy.get('.MuiSelect-root').click()
        cy.contains('Bounding box').click()
        return this
    }
    enterObjectClassName(){
        cy.wait(3000)
        return cy.get('#column-label')
         
    }



}
export default editorEdit