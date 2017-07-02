import { RouterauxPage } from './app.po';

describe('routeraux App', () => {
  let page: RouterauxPage;

  beforeEach(() => {
    page = new RouterauxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
