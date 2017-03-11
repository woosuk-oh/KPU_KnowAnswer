import { AlgorithmGameAppPage } from './app.po';

describe('algorithm-game-app App', () => {
  let page: AlgorithmGameAppPage;

  beforeEach(() => {
    page = new AlgorithmGameAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
