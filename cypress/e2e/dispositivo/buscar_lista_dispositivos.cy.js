/// <reference types="cypress"/> 

describe('Buscar lista dispositivos', () => {

    it('Buscar lista de dispositivos', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects'
        }).then ((resultado) => {
            // console.log(resultado.status)
            expect(resultado.status).to.eql(200)
        })
    })
})