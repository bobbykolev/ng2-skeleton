import { Ngc1Page } from './app.po';

describe('ngc1 App', function() {
  let page: Ngc1Page;

  beforeEach(() => {
    page = new Ngc1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
