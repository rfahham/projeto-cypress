/// <reference types="cypress"/> 

describe('Cadastrar dispositivos', () => {

    it('Cadastrar dispositivos', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: 
                {
                    "name": "Apple MacBook Pro 16",
                    "data": {
                       "year": 2024,
                       "price": 1849.99,
                       "CPU model": "Intel Core i9",
                       "Hard disk size": "1 TB"
                    }
                 }

        }).then ((resultado) => {
            // console.log(resultado.status)
            expect(resultado.status).to.eql(200)
            expect(resultado.body.id).to.not.empty
            expect(resultado.body.name).to.eql('Apple MacBook Pro 16')
        })
    })

})