import { ServelotsPage } from './app.po';

describe('servelots App', () => {
  let page: ServelotsPage;

  beforeEach(() => {
    page = new ServelotsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
