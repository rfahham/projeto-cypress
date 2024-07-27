describe('Buscar dispositivos específico', () => {

    it('Buscar dispositivos específico', () => {
        cy.request({
            method: 'GET',
            url: 'https://www.globo.com'
        }).then ((resultado) => {
            // console.log(resultado.status)
            expect(resultado.status).to.eql(200)
            
        })
    })

})