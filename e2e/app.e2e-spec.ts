import { NgBootstrapNavigationPage } from './app.po';

describe('ng-bootstrap-navigation App', () => {
  let page: NgBootstrapNavigationPage;

  beforeEach(() => {
    page = new NgBootstrapNavigationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
