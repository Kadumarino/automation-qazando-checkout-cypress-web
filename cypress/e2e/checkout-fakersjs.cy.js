/// <reference types="cypress" />
const cadastros = require("../fixtures/checkout.json");

const tamanhoTelas = [
  "iphone-6",
  "ipad-2",
  "samsung-note9",
  "macbook-15",
  "desktop",
];

cadastros.forEach((cadastro, idx) => {
  tamanhoTelas.forEach((tamanho) => {
    describe(`Cadastro ${idx} - Criar Cadastro e Checkout ${tamanho}`, () => {
      beforeEach(() => {
        cy.viewport(tamanho !== "desktop" ? tamanho : 1920, 1080);
        cy.visit("/checkout-one");
      });

      it("Checkout com sucesso", () => {
        cy.checkoutSuccessful(cadastro);
      });

      it(`Mensagem de erro campos obrigatorios -  Por Contains ${tamanho}`, () => {
        cy.emptyFieldsWithContains();
      });

      it(`Mensagem de erro campos obrigatorios - Por IDs ${tamanho}`, () => {
        cy.emptyFieldsWithIds();
      });

      it(`Mensagem de erro ao não selecionar país/cidade - BUG ${tamanho}`, () => {
        cy.partialEmptyFields(cadastro);
      });

      it(`Checkout com sucesso - FakersJS ${tamanho}`, () => {
        cy.checkoutSuccessfulFakersJS();
      });
    });
  });
});
