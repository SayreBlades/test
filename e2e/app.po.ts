export class Ng4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng4-app h1')).getText();
  }
}
