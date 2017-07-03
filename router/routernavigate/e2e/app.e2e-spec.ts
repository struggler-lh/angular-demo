import { RouternavigatePage } from './app.po';

describe('routernavigate App', () => {
  let page: RouternavigatePage;

  beforeEach(() => {
    page = new RouternavigatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
