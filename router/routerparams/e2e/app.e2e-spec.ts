import { RouterparamsPage } from './app.po';

describe('routerparams App', () => {
  let page: RouterparamsPage;

  beforeEach(() => {
    page = new RouterparamsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
