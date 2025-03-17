/// <reference types = "cypress"/>

describe("Testa componente de login do teste 02", () => {
    it("visita a página de login", ()=>{
        cy.visit("../cy-igor/teste02.html")

        cy.get('[type="text"]')
        .type("Érica")
        
        cy.get('[type="email"]').type("teste@teste.com")

        cy.get('textarea').type("Mensagem de teste")

        cy.get('button[type = "submit"]').click();
        cy.get('#success-message').should('contain', 'Mensagem enviada com sucesso');

    })

    it("Mensagem de erro com campos vazios", ()=>{
        cy.visit("../cy-igor/teste02.html")

        cy.get('[type="text"]:invalid').should('exist');
        
        cy.get('[type="email"]:invalid').should('exist');

        cy.get('textarea:invalid').should('exist');

        cy.get('button[type = "submit"]').click();
     

    })
})