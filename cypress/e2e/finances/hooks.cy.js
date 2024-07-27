// HOOKS
// Executar antes ou depois de cada ou de todos os testes
// EVITA - Repetição de código
// TIPOS:
// before - executar código uma vez antes de todos os testes
// after - executar código uma vez depois de todos os testes 
// beforeEach - executar código antes de cada teste
// afterEach - executar código depois de cada teste

beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')
})

describe('Transações Financeiras', () => {

    it('Cadastrar uma entrada', () => { 
        // Acessar o site com beforeEach
        criarTransação("Site1", 3000)
        criarTransação("Site2", 3500)

        cy.get('tbody tr td.description').should('have.text', 'Site1Site2')

    });

    it('Cadastrar uma saida', () => { 
        // Acessar o site com beforeEach
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

