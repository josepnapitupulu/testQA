class ResizablePage {

  visit() {
    cy.visit('https://demoqa.com/resizable');
  }

  resizeBox() {
  cy.get('#resizableBoxWithRestriction')
    .find('.react-resizable-handle-se')
    .trigger('mousedown', { which: 1 });

  cy.get('#resizableBoxWithRestriction')
    .trigger('mousemove', { clientX: 600, clientY: 400 })
    .trigger('mouseup', { force: true });
}

verifySize() {
  cy.get('#resizableBoxWithRestriction')
    .invoke('width')
    .should('be.greaterThan', 390);

  cy.get('#resizableBoxWithRestriction')
    .invoke('height')
    .should('be.greaterThan', 190);
}

}

export default new ResizablePage();