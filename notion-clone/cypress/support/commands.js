/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Parent Command
Cypress.Commands.add("getByAttr", (key, value) => {
  return cy.get(`[data-cy-${key}=${value}]`);
});

// Child Command
Cypress.Commands.add(
  "findByAttr",
  { prevSubject: "element" },
  (subject, key, value) => {
    return cy.wrap(subject).find(`[data-cy-${key}=${value}]`);
  }
);

Cypress.Commands.add('typeTab', (shiftKey=false, ctrlKey=false) => {
  cy.focused().trigger('keydown', {
      keyCode: 9,
      which: 9,
      shiftKey: shiftKey,
      ctrlKey: ctrlKey
  });
});

Cypress.Commands.add(
  "filterByAttr",
  { prevSubject: "element" },
  (subject, key, value) => {
    return cy.wrap(subject).filter(`[data-cy-${key}=${value}]`);
  }
);
