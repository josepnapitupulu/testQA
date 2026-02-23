class DroppablePage {

  visit() {
    cy.visit('https://demoqa.com/droppable');
    cy.get('#draggable').should('be.visible');
  }

  dragToDrop() {

    cy.get('#draggable').then($drag => {

      const dragRect = $drag[0].getBoundingClientRect();

      cy.get('#droppable').then($drop => {

        const dropRect = $drop[0].getBoundingClientRect();

        const startX = dragRect.left + dragRect.width / 2;
        const startY = dragRect.top + dragRect.height / 2;

        const endX = dropRect.left + dropRect.width / 2;
        const endY = dropRect.top + dropRect.height / 2;

        cy.wrap($drag)
          .trigger('mousedown', { button: 0, clientX: startX, clientY: startY, force: true });

        cy.get('body')
          .trigger('mousemove', { button: 0, clientX: startX + 50, clientY: startY + 50, force: true })
          .trigger('mousemove', { button: 0, clientX: endX, clientY: endY, force: true });

        cy.get('body')
          .trigger('mouseup', { force: true });

      });

    });

  }

  verifyDropped() {
    cy.get('#droppable')
      .should('contain.text', 'Dropped');
  }
}

export default new DroppablePage();