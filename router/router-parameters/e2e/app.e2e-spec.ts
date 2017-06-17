import { RouterParametersPage } from './app.po';

describe('router-parameters App', () => {
  let page: RouterParametersPage;

  beforeEach(() => {
    page = new RouterParametersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
