import { faker } from "@faker-js/faker";

export function inputName(name) {
    cy.get("#user").type(name);

}

export function inputEmail(email) {
    cy.get("#email").type(email);
    
}

export function inputPassword(password) {
    cy.get("#password").type(password);
    
}

export function errorMessage(message) {
    cy.get("#errorMessageFirstName")
        .should("be.visible")
        .should("have.text", message);

}

export function successMessage(message, name) {
    cy.get("#swal2-title")
        .should("be.visible")
        .should("have.text", message);
    cy.get(".swal2-html-container")
        .should("be.visible")
        .should("have.text", `Bem-vindo ${name}`);

}

export function buttonRegister() {
    cy.get("#btnRegister").click();

}

export function buttonConfirm() {
    cy.get(".swal2-confirm").click();

}