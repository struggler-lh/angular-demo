import { RouterguardsPage } from './app.po';

describe('routerguards App', () => {
  let page: RouterguardsPage;

  beforeEach(() => {
    page = new RouterguardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
