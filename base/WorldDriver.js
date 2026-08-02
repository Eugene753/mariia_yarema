import { setWorldConstructor } from '@cucumber/cucumber';
import 'dotenv/config';

import BrowserDriverFactory from './BrowserDriverFactory.js';

class WorldDriver {
  constructor({ log, attach, parameters }) {
    this.driver = null;
    this.pages = null;

    this.log = log;
    this.attach = attach;
    this.parameters = parameters;
  }

  getDriver() {
    return this.driver;
  }

  async setUp() {
    const environment = process.env.ENVIRONMENT;
    const browser = process.env.BROWSER;

    switch (environment?.toLowerCase()) {
        
      case 'local': {
        const logger = {
            info: message => this.log(message),
            error: message => this.log(message)
        };
        const factory = new BrowserDriverFactory(browser, logger);
        this.driver = await factory.createDriver();
        break;
      }

      default:
        throw new Error(
          `Unsupported environment: ${environment}`
        );
    }

    await this.driver.manage().window().maximize();
  }

  async tearDown() {
    this.log('Closing browser');

    if (this.driver) {
      await this.driver.quit();
      this.driver = null;
    }
  }
}

setWorldConstructor(WorldDriver);