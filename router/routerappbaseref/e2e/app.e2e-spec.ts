import { RouterappbaserefPage } from './app.po';

describe('routerappbaseref App', () => {
  let page: RouterappbaserefPage;

  beforeEach(() => {
    page = new RouterappbaserefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
