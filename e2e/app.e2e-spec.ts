import { ChefPage } from './app.po';

describe('chef App', () => {
  let page: ChefPage;

  beforeEach(() => {
    page = new ChefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
