describe('Transações Financeiras', () => {

    it('Acessar site especificando o método', () => {
        cy.request({
            method: 'GET',
            url: 'https://devfinance-agilizei.netlify.app/#'
        }).then ((resultado) => {
            // console.log(resultado.status)
            expect(resultado.status).to.eql(200)
        })
    })

    it('Acessar site com cy.visit', () => { 
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    })

    it('Cadastrar uma entrada', () => { 
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    })

    it('Cadastrar uma saída', () => { 
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    })
})