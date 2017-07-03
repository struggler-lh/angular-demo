import { RouterlinkactivePage } from './app.po';

describe('routerlinkactive App', () => {
  let page: RouterlinkactivePage;

  beforeEach(() => {
    page = new RouterlinkactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
