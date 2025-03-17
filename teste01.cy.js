/// <reference types = "cypress"/>

describe("Testa componente de login do teste 01", () => {
    it("visita a página de login", ()=>{
        cy.visit("../cy-igor/teste01.html")

        cy.get('[type="email"]').type("teste@teste.com")
        
        cy.get('[type="password"]').type("123456")

        cy.get('button[type = "submit"]').click()

        
    })
})

// describe.only('first', ()=>{second})