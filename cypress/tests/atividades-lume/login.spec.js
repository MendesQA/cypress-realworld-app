const { equal } = require("assert");

describe('Exercicio 1 LumeStack', () => {
    
    it('Deve fazer login com um usuário válido', () => {
      
      cy.visit('')
      cy.get("[type='text']").type('mendesqa')
      cy.get("[type='password']").type('12345')
      cy.get("[type='submit']").click()
      cy.contains('Everyone').should('be.visible')
      
    });
    
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      
      cy.visit('')
      cy.get("[type='text']").type('teste')
      cy.get("[type='password']").type('teste')
      cy.get("[type='submit']").click()
      cy.get("[role='alert']").should('contain', 'Username or password is invalid')
      
    });

    it('Deve registrar um novo usuário com informações válidas', () => {
        
        cy.visit('')
        cy.get("[href='/signup']").click()
        cy.get("[name='firstName']").type('Teste')
        cy.get("[name='lastName']").type('QA')
        cy.get("[name='username']").type('TesteQA')
        cy.get("[name='password']").type('12345asd')
        cy.get("[name='confirmPassword']").type('12345asd')
        cy.get("[type='submit']").click()

    });

    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
       
        cy.visit('')
        cy.get("[href='/signup']").click()
        cy.get("[name='firstName']").type('Teste')
        cy.get("[name='lastName']").type('QA')
        cy.get("[name='username']").click()
        cy.get("[name='password']").type('12345asd')
        cy.get("[name='confirmPassword']").type('12345asd')
        cy.get(".MuiFormHelperText-sizeMedium").should('contain', 'Username is required')
        //cy.get("[type='submit']").click()
      
    });

  });