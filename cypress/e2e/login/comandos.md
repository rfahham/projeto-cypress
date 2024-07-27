# Sobre o script

- describe: Define um conjunto de testes relacionados. Neste caso, os testes de login.

- it: Define um caso de teste específico. Aqui, temos dois casos de teste:
 
    - O primeiro verifica se o login é bem-sucedido com credenciais válidas.
    - O segundo verifica se uma mensagem de erro é exibida quando as credenciais são inválidas.

- cy.visit(): Navega até a URL especificada, que é a página de login da aplicação.

- cy.get(): Seleciona um elemento na página usando um seletor CSS.

- type(): Digita o texto fornecido no campo selecionado.

- click(): Clica no botão de login.

- cy.url().should('include', '/dashboard'): Verifica se a URL atual contém '/dashboard', indicando que o login foi bem-sucedido.

- cy.contains(): Verifica se o texto fornecido está presente na página.