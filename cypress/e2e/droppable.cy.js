import DroppablePage from '../pages/droppablePage';

describe('Droppable Test', () => {

  it('Drag and Drop Element', () => {
    DroppablePage.visit();
    DroppablePage.dragToDrop();
    DroppablePage.verifyDropped();
  });

});