import {
  When,
  Then
} from '@cucumber/cucumber';

import {
  By,
  Key,
  until
} from 'selenium-webdriver';



When('I open google.com website', async function () {
  await this.getDriver().get('https://www.google.com/');
});

Then('I enter any information into search field', async function () {
  const searchField = await this.getDriver().wait(
    until.elementLocated(By.name('q')),
    10000
  );

  await searchField.sendKeys('Movie');
});

Then('I see search results', async function () {
  const searchField = await this.getDriver().findElement(
    By.name('q')
  );

  await searchField.sendKeys(Key.ENTER);

  await this.getDriver().wait(
    until.urlContains('/search'),
    10000
  );

  const results = await this.getDriver().wait(
    until.elementLocated(By.id('search')),
    10000
  );

  await this.getDriver().wait(
    until.elementIsVisible(results),
    10000
  );
});