import { faker } from "@faker-js/faker";

import checkout from "../fixtures/checkout.json";

Cypress.Commands.add("checkoutSuccessful", (cadastro) => {
  cy.get("#fname").type(cadastro.firstName);
  cy.get("#lname").type(cadastro.lastName);
  cy.get("#cname").type(cadastro.company);
  cy.get("#email").type(cadastro.email);
  cy.get("#country").select(1);
  cy.get("#city").select(1);
  cy.get("#zip").type(cadastro.zipCode);
  cy.get("#faddress").type(cadastro.address);
  cy.get("#messages").type(
    "Por favor, entregar entre 9h e 18h.{enter}Obrigado!",
  );
  cy.get("#materialUnchecked").check();
  cy.get(".checkout-area-bg > .theme-btn-one").click();
  cy.contains("Billings Information registred with success!").should(
    "be.visible",
  );
  cy.get('#headingThree > .collapsed > [name="payment"]').check();
  cy.get(":nth-child(2) > :nth-child(2) > .theme-btn-one").click();
  cy.contains(
    "Order success!" + "Congrats! Your order was created with sucess!",
  ).should("be.visible");
  cy.wait(1000);
  cy.get(".close > span").click();
});
Cypress.Commands.add("emptyFieldsWithContains", () => {
  cy.get(".checkout-area-bg > .theme-btn-one").click();
  cy.get('#headingThree > .collapsed > [name="payment"]').check();
  cy.get(":nth-child(2) > :nth-child(2) > .theme-btn-one").click();
  cy.contains("O campo First Name deve ser prenchido").should("be.visible");
  cy.contains("O campo Last Name deve ser prenchido").should("be.visible");
  cy.contains("O campo Company deve ser prenchido").should("be.visible");
  cy.contains("O campo E-mail deve ser prenchido ou é inválido").should(
    "be.visible",
  );
  cy.contains("O campo Country deve ser prenchido").should("be.visible");
  cy.contains("O campo City deve ser prenchido").should("be.visible");
  cy.contains("O campo Zip Code deve ser prenchido").should("be.visible");
  cy.contains("O campo Address deve ser prenchido").should("be.visible");
  cy.contains("O campo Additional Notes deve ser prenchido").should(
    "be.visible",
  );
  cy.contains("Preencha os dados de pagamento!").should("be.visible");
});
Cypress.Commands.add("emptyFieldsWithIds", () => {
  cy.get(".checkout-area-bg > .theme-btn-one").click();
  cy.get(":nth-child(2) > :nth-child(2) > .theme-btn-one").click();
  cy.get(":nth-child(1) > .form-group > #errorMessageFirstName").should(
    "be.visible",
  );
  cy.get(":nth-child(2) > .form-group > #errorMessageFirstName").should(
    "be.visible",
  );
  cy.get(":nth-child(3) > .form-group > #errorMessageFirstName").should(
    "be.visible",
  );
  cy.get(":nth-child(4) > .form-group > #errorMessageFirstName").should(
    "be.visible",
  );
  cy.get(":nth-child(5) > .form-group > #errorMessageFirstName").should(
    "be.visible",
  );
  cy.get(":nth-child(6) > .form-group > #errorMessageFirstName").should(
    "be.visible",
  );
  cy.get(":nth-child(7) > .form-group > #errorMessageFirstName").should(
    "be.visible",
  );
  cy.get(":nth-child(8) > .form-group > #errorMessageFirstName").should(
    "be.visible",
  );
  cy.get(":nth-child(9) > .form-group > #errorMessageFirstName").should(
    "be.visible",
  );
  cy.get(".payment_method > #errorMessageFirstName").should("be.visible");
});
Cypress.Commands.add("partialEmptyFields", (cadastro) => {
  // country and city not selected
        cy.get("#fname").type(cadastro.firstName);
        cy.get("#lname").type(cadastro.lastName);
        cy.get("#cname").type(cadastro.company);
        cy.get("#email").type(cadastro.email);
        cy.get("#country").select(1);
        cy.get("#faddress").type(cadastro.address);
        cy.get("#messages").type(
          "Por favor, entregar entre 9h e 18h.{enter}Obrigado!",
        );
        cy.get("#materialUnchecked").check();
        cy.get(".checkout-area-bg > .theme-btn-one").click();
        cy.contains("Billings Information registred with success!").should(
          "be.visible",
        );
        cy.get('#headingThree > .collapsed > [name="payment"]').check();
        cy.get(":nth-child(2) > :nth-child(2) > .theme-btn-one").click();
});
Cypress.Commands.add("checkoutSuccessfulFakersJS", () => {
        cy.get("#fname").type(faker.person.firstName());
        cy.get("#lname").type(faker.person.lastName());
        cy.get("#cname").type(faker.company.name());
        cy.get("#email").type(faker.internet.email());
        cy.get("#country").select(1);
        cy.get("#city").select(1);
        cy.get("#zip").type(faker.location.zipCode());
        cy.get("#faddress").type(faker.location.streetAddress());
        cy.get("#messages").type(
          `${faker.lorem.sentence()}{enter}${faker.lorem.sentence()}`,
        );
        cy.get("#materialUnchecked").check();
        cy.get(".checkout-area-bg > .theme-btn-one").click();
        cy.contains("Billings Information registred with success!").should(
          "be.visible",
        );
        cy.get('#headingThree > .collapsed > [name="payment"]').check();
        cy.get(":nth-child(2) > :nth-child(2) > .theme-btn-one").click();
        cy.contains(
          "Order success!" + "Congrats! Your order was created with sucess!",
        ).should("be.visible");
        cy.wait(2000);
        cy.get(".close > span").click();

});
Cypress.Commands.add("reloadPage", () => {
  cy.reload();
});

