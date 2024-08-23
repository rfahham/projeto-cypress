describe('Login', () => {
    it('successfully logs in', () => {
      cy.intercept('GET', '**/notes').as('getNotes')

      cy.login()
      cy.wait('@getNotes')
  
      cy.contains('a', 'Create a new note').should('be.visible')
    })
  })

  // npx cypress run --spec cypress/e2e/login-customizado.cy.js