describe('Transações Financeiras', () => {

    it('Cadastrar uma entrada', () => { 
        cy.visit('https://devfinance-agilizei.netlify.app/#')
        
        criarTransação("Site1", 3000)
        criarTransação("Site2", 3500)

        cy.get('tbody tr td.description').should('have.text', 'Site1Site2')

    });

    it('Cadastrar uma saida', () => { 
        cy.visit('https://devfinance-agilizei.netlify.app/#')
        
        criarTransação("Cinema", -100)
        criarTransação("Jantar", -200)

        cy.get('tbody tr td.description').should('have.text', 'CinemaJantar')

    });

    it.skip('Usando o SKIP', () => { 
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    });

})

// formato yyyy-mm-dd
var date = '2024-07-27'

function criarTransação(descricao, valor){

    cy.get('#transaction > .button').click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type(date) 
    cy.get('button').click()

}

