describe('Transações Financeiras', () => {

    it('Cadastrar uma entrada', () => { 
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        // cy.contains('Nova Transação').click()
        // ou
        cy.get('#transaction > .button').click()

        cy.get('#description').type('Internet')

        cy.get('#amount').type('-100')

        cy.get('#date').type('2024-07-27') // yyyy-mm-dd

        cy.get('button').click()
        // ou 
        // cy.contains('button', 'Salvar').click()

    })

})