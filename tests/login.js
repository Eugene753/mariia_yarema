import { When, Then } from "@cucumber/cucumber";

import { By, Key, until } from "selenium-webdriver";
import "dotenv/config";
import assert from "node:assert/strict";

When("I open google.com website", async function () {
  await this.driver.get(process.env.URL);
});

Then("I enter any information into search field", async function () {
  await this.pages.loginPage.login();
});
