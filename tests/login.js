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
  await this.driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

Then('I enter any information into search field', async function () {
  await this.pages.loginPage.login();
});
