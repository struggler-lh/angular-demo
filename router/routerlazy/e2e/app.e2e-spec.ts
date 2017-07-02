import { RouterlazyPage } from './app.po';

describe('routerlazy App', () => {
  let page: RouterlazyPage;

  beforeEach(() => {
    page = new RouterlazyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
