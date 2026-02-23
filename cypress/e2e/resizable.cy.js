import ResizablePage from '../pages/resizablePage';

describe('Resizable Test', () => {

  it('Resize Element to 400 x 200', () => {
    ResizablePage.visit();
    ResizablePage.resizeBox();
    ResizablePage.verifySize();
  });

});