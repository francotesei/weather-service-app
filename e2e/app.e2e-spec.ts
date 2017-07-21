import { WeatherserviceappPage } from './app.po';

describe('weatherserviceapp App', () => {
  let page: WeatherserviceappPage;

  beforeEach(() => {
    page = new WeatherserviceappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
