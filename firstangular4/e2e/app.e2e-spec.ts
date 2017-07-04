import { Firstangular4Page } from './app.po';

describe('firstangular4 App', () => {
  let page: Firstangular4Page;

  beforeEach(() => {
    page = new Firstangular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
