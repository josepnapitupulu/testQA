class WebTablesPage {

  visit() {
    cy.visit('https://demoqa.com/webtables');
  }

  clickAddButton() {
    cy.contains('Add').click();
  }

  fillForm(user) {

  if(user.firstName)
    cy.get('#firstName').clear().type(user.firstName);

  if(user.lastName)
    cy.get('#lastName').clear().type(user.lastName);

  if(user.email)
    cy.get('#userEmail').clear().type(user.email);

  if(user.age)
    cy.get('#age').clear().type(user.age);

  if(user.salary)
    cy.get('#salary').clear().type(user.salary);

  if(user.department)
    cy.get('#department').clear().type(user.department);
}

  submitForm() {
    cy.get('#submit').click();
  }

  verifyUserAdded(user) {
    cy.contains(user.firstName).should('exist');
    cy.contains(user.lastName).should('exist');
  }

  verifyError() {
    cy.get('.field-error').should('exist');
  }

  verifyFormNotClosed() {
    cy.get('.modal-content').should('be.visible');
  }

  verifyUserNotAdded(email) {
    cy.get('.rt-tbody').should('not.contain', email);
  }

  verifyModalStillOpen() {
    cy.get('.modal-content').should('be.visible');
  }

  verifyInputInvalid(fieldId) {
    cy.get(`#${fieldId}`).then(($el) => {
      expect($el[0].checkValidity()).to.be.false;
    });
  }

  verifyUserNotAdded(user) {
  cy.get('.rt-tbody').should('not.contain', user.firstName);
  cy.get('.rt-tbody').should('not.contain', user.lastName);
}
}

export default new WebTablesPage();