import { FormsTamplateDrivenPage } from './app.po';

describe('forms-tamplate-driven App', () => {
  let page: FormsTamplateDrivenPage;

  beforeEach(() => {
    page = new FormsTamplateDrivenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
