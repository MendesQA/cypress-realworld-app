describe('Atividade 2 LumeStack', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        
        cy.visit('')
        cy.get("[type='text']").type('TesteQA')
        cy.get("[type='password']").type('12345asd')
        cy.get("[type='submit']").click()
        cy.get("[href='/transaction/new']").click()
        cy.get("[type='text']").type('Mendes')
        cy.get('.css-13s1204-MuiTypography-root').eq(10).click()
        cy.get("[type='text']").first().type('10')
        cy.get("[type='text']").last().type('teste lume')
        cy.get("[data-test='transaction-create-submit-payment']").click()
        cy.get('.MuiAlert-message').contains('Transaction Submitted!')

    });
    
    it.only('Deve enviar dinheiro com saldo insuficiente', () => {
        
        cy.visit('')
        cy.get("[type='text']").type('TesteQA')
        cy.get("[type='password']").type('12345asd')
        cy.get("[type='submit']").click()
        cy.get("[href='/transaction/new']").click()
        cy.get("[type='text']").type('Mendes')
        cy.get('.css-13s1204-MuiTypography-root').eq(10).click()
        cy.get("[data-test='sidenav-user-balance']").invoke('text').then((text) => {
          // Remover caracteres indesejados e converter para número
          const saldo = parseFloat(text.replace(/[^0-9.-]+/g, ''));
      
          if (saldo > 1000) {
            cy.get("[type='text']").first().type('1000')
            cy.get("[type='text']").last().type('teste lume')
            cy.get("[data-test='transaction-create-submit-payment']").click()
            cy.get('.MuiAlert-message').contains('Transaction Submitted!')
          } else {
            cy.log("Saldo insuficiente. Nenhuma ação foi realizada.")
          }
        });
        
      

    });

});