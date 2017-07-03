import { Router404Page } from './app.po';

describe('router404 App', () => {
  let page: Router404Page;

  beforeEach(() => {
    page = new Router404Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
