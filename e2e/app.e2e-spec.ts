import { LEARNINGAPPPage } from './app.po';

describe('learning-app App', () => {
  let page: LEARNINGAPPPage;

  beforeEach(() => {
    page = new LEARNINGAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
