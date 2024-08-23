describe('Login', () => {
    it('successfully logs in', () => {
      
      cy.guiLogin()
       
      cy.contains('a', 'Create a new note').should('be.visible')
    })
  })

  // Observe que agora temos um comando para fazer o login via GUI e outro para fazer o login usando o comando `cy.session`, o qual, quando executado pela primeira vez, irá fazer o login via GUI, no entanto, nas proximas execuções, tal comando irá restaurar a sessão do usuário, não perdendo tempo via GUI.

  // npx cypress run --spec cypress/e2e/login-customizado.cy.js