/// <reference types = "cypress"/>

describe("Testa componente de links do teste 03", () => {
    it("visita a página de link home", ()=>{
        cy.visit("../cy-igor/teste03.html")

        cy.get(':nth-child(1) > a').click();
        cy.go('back');
    
    });
    it("visita a página de link sobre", ()=>{
        cy.visit("../cy-igor/teste03.html")

        cy.get(':nth-child(2) > a').click();
        cy.go('back');
    
    });
    it("visita a página de link serviço", ()=>{
        cy.visit("../cy-igor/teste03.html")

        cy.get(':nth-child(3) > a').click();
        cy.go('back');
    
    });
    it("visita a página de link contato", ()=>{
        cy.visit("../cy-igor/teste03.html")

        cy.get(':nth-child(4) > a').click();
        cy.go('back');
    
    });

    
    })