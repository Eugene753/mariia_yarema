import { setWorldConstructor } from "@cucumber/cucumber";
import "dotenv/config";

import BrowserDriverFactory from "./BrowserDriverFactory.js";
import PageInitializer from "../pages/PageInitializer.js";

/** @typedef {import("selenium-webdriver").WebDriver} WebDriver */

class WorldDriver {
  /**
   * @param {{
   *   log: Function,
   *   attach: Function,
   *   parameters: object
   * }} options
   */
  constructor({ log, attach, parameters }) {
    /** @type {WebDriver|null} */
    this.driver = null;

    /** @type {PageInitializer|null} */
    this.pages = null;

    this.log = log;
    this.attach = attach;
    this.parameters = parameters;
  }

  async setUp() {
    const environment = process.env.ENVIRONMENT;
    const browser = process.env.BROWSER;

    switch (environment?.toLowerCase()) {
      case "local": {
        const logger = {
          info: (message) => this.log(message),
          error: (message) => this.log(message),
        };

        const factory = new BrowserDriverFactory(browser, logger);
        this.driver = await factory.createDriver();
        break;
      }

      default:
        throw new Error(`Unsupported environment: ${environment}`);
    }

    await this.driver.manage().window().maximize();
    await this.driver.get(process.env.URL);

    this.pages = new PageInitializer(this.driver);
  }

  async tearDown() {
    this.log("Closing browser");

    if (this.driver) {
      await this.driver.quit();
      this.driver = null;
    }
  }
}

setWorldConstructor(WorldDriver);