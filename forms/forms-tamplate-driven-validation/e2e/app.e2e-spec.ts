import { FormsTamplateDrivenValidationPage } from './app.po';

describe('forms-tamplate-driven-validation App', () => {
  let page: FormsTamplateDrivenValidationPage;

  beforeEach(() => {
    page = new FormsTamplateDrivenValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
