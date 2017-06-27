import { RouterchildPage } from './app.po';

describe('routerchild App', () => {
  let page: RouterchildPage;

  beforeEach(() => {
    page = new RouterchildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
