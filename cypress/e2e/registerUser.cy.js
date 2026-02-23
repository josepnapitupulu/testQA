import WebTablesPage from '../pages/webTablesPage';
import { readCSV } from '../utils/csvReader';

describe('Bulk Register User - Web Tables', () => {

  beforeEach(() => {
    WebTablesPage.visit();
  });

  it('Register multiple users from CSV', () => {

    readCSV('users.csv').then((users) => {

      users.forEach((user) => {

        WebTablesPage.clickAddButton();
        WebTablesPage.fillForm(user);
        WebTablesPage.submitForm();

        if(user.email && !isNaN(user.age) && user.salary){
          WebTablesPage.verifyUserAdded(user);
        } else {
          cy.get('.modal-content').should('be.visible');
        }

      });

    });

  });

});