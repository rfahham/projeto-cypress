describe('Transações Financeiras', () => {

    it('Cadastrar uma entrada', () => { 
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        // cy.contains('Nova Transação').click()
        // ou
        cy.get('#transaction > .button').click()

        cy.get('#description').type('Projeto com cypress')

        cy.get('#amount').type('1500')

        cy.get('#date').type('2024-07-27') // yyyy-mm-dd

        cy.get('button').click()
        // ou 
        // cy.contains('button', 'Salvar').click()

        cy.get('.description').should('have.text', 'Projeto com cypress')
        // cy.get('.income').should('have.text', 'R$ 1.500,00')
    })

})