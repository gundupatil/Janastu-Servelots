import { BootstrapprojectPage } from './app.po';

describe('bootstrapproject App', () => {
  let page: BootstrapprojectPage;

  beforeEach(() => {
    page = new BootstrapprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
