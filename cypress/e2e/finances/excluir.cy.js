beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')
})
describe('Transações Financeiras', () => {
    
    it('Excluir uma Transação', () => { 
        
        criarTransação("Site1", 750)
        criarTransação("Site2", 1500)
        criarTransação("Site3", 3000)
        
        // Usando Parent
        cy.contains('.description', 'Site1')
          .parent()
          .find('img')
          .click()

        // Usando Children
        cy.contains('.description', 'Site2')
          .siblings()
          .children('img')
          .click()
        
        cy.get('tbody tr').should('have.length', 1)
    })

})

var date = '2024-07-27'

function criarTransação(descricao, valor){

    cy.get('#transaction > .button').click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type(date) 
    cy.get('button').click()

}