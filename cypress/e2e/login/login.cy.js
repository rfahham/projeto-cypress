describe('Login Test', () => {
    it('should log in successfully with valid credentials', () => {
        // Visitar a página de login
        cy.visit('https://sua-aplicacao.com/login');
        
        // Encontrar e preencher o campo de nome de usuário
        cy.get('input[name="username"]').type('usuario_teste');
        
        // Encontrar e preencher o campo de senha
        cy.get('input[name="password"]').type('senha_teste');
        
        // Encontrar e clicar no botão de login
        cy.get('button[type="submit"]').click();
        
        // Verificar se o login foi bem-sucedido
        cy.url().should('include', '/dashboard');
        cy.contains('Bem-vindo, usuario_teste').should('be.visible');
    });

    it('should show error on login with invalid credentials', () => {
        // Visitar a página de login
        cy.visit('https://sua-aplicacao.com/login');
        
        // Encontrar e preencher o campo de nome de usuário
        cy.get('input[name="username"]').type('usuario_teste');
        
        // Encontrar e preencher o campo de senha
        cy.get('input[name="password"]').type('senha_incorreta');
        
        // Encontrar e clicar no botão de login
        cy.get('button[type="submit"]').click();
        
        // Verificar se a mensagem de erro é exibida
        cy.contains('Credenciais inválidas').should('be.visible');
    });
});
