import {
  Before,
  After
} from '@cucumber/cucumber';

import PageInitializer from '../pageInitializer/PageInitializer.js';

Before(async function (scenario) {
  this.scenario = scenario;

  console.log(
    'World constructor:',
    this.constructor.name
  );

  await this.setUp();

  this.pages = new PageInitializer(this.getDriver());
});

After(async function () {
  await this.tearDown();
});