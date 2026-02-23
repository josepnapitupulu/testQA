import WebTablesPage from '../pages/webTablesPage';
import { readCSV } from '../utils/csvReader';

describe('Register User Negative Test', () => {

  it('Should show validation and not add user', () => {

    WebTablesPage.visit();

    readCSV('users_negative.csv').then((users) => {

      users.forEach((user) => {

        WebTablesPage.clickAddButton();
        WebTablesPage.fillForm(user);
        
        WebTablesPage.submitForm();

        WebTablesPage.verifyModalStillOpen();

        if(user.scenario === 'emailEmpty'){
          WebTablesPage.verifyInputInvalid('userEmail');
        }

        if(user.scenario === 'ageInvalid'){
          WebTablesPage.verifyInputInvalid('age');
        }

        if(user.scenario === 'salaryEmpty'){
          WebTablesPage.verifyInputInvalid('salary');
        }

        WebTablesPage.verifyUserNotAdded(user);

        cy.get('#closeLargeModal').click();

      });

    });

  });

});