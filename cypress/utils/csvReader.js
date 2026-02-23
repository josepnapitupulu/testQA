import Papa from 'papaparse';

export const readCSV = (filePath) => {
  return cy.fixture(filePath).then((csvData) => {
    return Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true
    }).data;
  });
};