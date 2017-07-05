import { FormsTamplateDrivenSubmitPage } from './app.po';

describe('forms-tamplate-driven-submit App', () => {
  let page: FormsTamplateDrivenSubmitPage;

  beforeEach(() => {
    page = new FormsTamplateDrivenSubmitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
