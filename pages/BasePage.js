import { until } from "selenium-webdriver";

const TIMEOUT = 10000;

export default class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async findElement(locator) {
    return await this.driver.wait(until.elementLocated(locator), TIMEOUT);
  }

  async waitForVisible(locator) {
    const element = await this.findElement(locator);

    await this.driver.wait(until.elementIsVisible(element), TIMEOUT);

    return element;
  }

  async click(locator) {
    const element = await this.waitForVisible(locator);
    await element.click();
  }

  async enterText(locator, text) {
    const element = await this.waitForVisible(locator);
    await element.clear();
    await element.sendKeys(text);
  }

  async waitUntilInvisible(locator) {
    await this.driver.wait(async () => {
      const elements = await this.driver.findElements(locator);

      // If the loader isn't in the DOM anymore, we're done
      if (elements.length === 0) {
        return true;
      }

      // Otherwise, wait until it's no longer displayed
      return !(await elements[0].isDisplayed());
    }, TIMEOUT);
  }
}
