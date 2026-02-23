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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-real-events/support";
import '@4tw/cypress-drag-drop';

// cypress/support/commands.js
Cypress.Commands.add('dragAndDrop', (dragSelector, dropSelector) => {
  cy.get(dragSelector).then($drag => {
    cy.get(dropSelector).then($drop => {
      // Dapatkan posisi
      const dragCoords = $drag[0].getBoundingClientRect();
      const dropCoords = $drop[0].getBoundingClientRect();

      // Drag start
      cy.get(dragSelector).trigger('mousedown', {
        button: 0,
        clientX: dragCoords.x,
        clientY: dragCoords.y,
        force: true
      });

      // Drag over target
      cy.get(dropSelector).trigger('mousemove', {
        button: 0,
        clientX: dropCoords.x,
        clientY: dropCoords.y,
        force: true
      });

      // Drop
      cy.get(dropSelector).trigger('mouseup', {
        clientX: dropCoords.x,
        clientY: dropCoords.y,
        force: true
      });
    });
  });
});