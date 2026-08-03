import {
  Before,
  After
} from '@cucumber/cucumber';


Before(async function (scenario) {
  this.scenario = scenario;

  await this.setUp();
});

After(async function () {
  await this.tearDown();
});