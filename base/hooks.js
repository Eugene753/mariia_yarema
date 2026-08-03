import {
  Before,
  After
} from '@cucumber/cucumber';


Before(async function (scenario) {
  this.scenario = scenario;

  console.log(
    'World constructor:',
    this.constructor.name
  );

  await this.setUp();
});

After(async function () {
  await this.tearDown();
});