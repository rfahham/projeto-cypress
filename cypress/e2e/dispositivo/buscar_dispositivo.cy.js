/// <reference types="cypress"/> 

describe('Buscar dispositivos específico', () => {

    it('Buscar dispositivos específico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/12'
        }).then ((resultado) => {
            // console.log(resultado.status)
            expect(resultado.status).to.eql(200)
            expect(resultado.body.id).to.eql('12')
        })
    })

})