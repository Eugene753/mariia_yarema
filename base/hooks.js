import { Before, After, setDefaultTimeout} from "@cucumber/cucumber";

setDefaultTimeout(30000);

Before(async function (scenario) {
  this.scenario = scenario;

  await this.setUp();
});

After(async function () {
  //await this.driver.sleep(5000); // Keep browser open for 5 seconds
  await this.tearDown();
});
