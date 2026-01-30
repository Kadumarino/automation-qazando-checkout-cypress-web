/// <reference types="cypress" />

const cadastroPages = require('../support/pages/cadastro_pages');

const { faker } = require("@faker-js/faker");

const tamanhoTelas = [
  "iphone-6",
  "ipad-2",
  "samsung-note9",
  "macbook-15",
  "desktop",
];

tamanhoTelas.forEach((tamanho) => {
  beforeEach(() => {
    cy.viewport(tamanho !== "desktop" ? tamanho : 1920, 1080);
    cy.visit("/register");
  });

  describe(`Cadastro com sucesso ${tamanho}`, () => {
    it("Deve criar um cadastro com sucesso", () => {
      const name = faker.person.firstName();

      cadastroPages.inputName(name);
      cadastroPages.inputEmail(faker.internet.email());
      cadastroPages.inputPassword(faker.internet.password({ length: 8 }));
      cadastroPages.buttonRegister();
      cadastroPages.successMessage("Cadastro realizado!", name);
      cadastroPages.buttonConfirm();
    });

    it(`Cadastro com nome vazio ${tamanho}`, () => {
      cadastroPages.inputEmail(faker.internet.email());
      cadastroPages.buttonRegister();
      cadastroPages.errorMessage("O campo nome deve ser prenchido");
    });

    it(`Cadastro com email inválido ${tamanho}`, () => {
      const name = faker.person.firstName();

      cadastroPages.inputName(name);
      cadastroPages.inputPassword(faker.internet.password({ length: 8 }));
      cadastroPages.buttonRegister();
      cadastroPages.errorMessage("O campo e-mail deve ser prenchido corretamente");
    });

    it(`Cadastro com senha inválida ${tamanho}`, () => {
      const name = faker.person.firstName();

      cadastroPages.inputName(name);
      cadastroPages.inputEmail(faker.internet.email());
      cadastroPages.inputPassword(faker.internet.password({ length: 4 }));
      cadastroPages.buttonRegister();
      cadastroPages.errorMessage("O campo senha deve ter pelo menos 6 dígitos");
    });
  });
});
