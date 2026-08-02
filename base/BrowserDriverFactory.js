import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import firefox from 'selenium-webdriver/firefox.js';


export default class BrowserDriverFactory {
    constructor(browser, log = console) {
        this.browser = browser?.toLowerCase() || 'chrome';
        this.log = log;
    }

    async createDriver() {
        this.log.info(`Creating driver: ${this.browser}`);

        switch (this.browser) {
            case 'chrome':
                return await new Builder()
                    .forBrowser('chrome')
                    .build();

            case 'firefox':
                return await new Builder()
                    .forBrowser('firefox')
                    .build();

            case 'chromeheadless': {
                const options = new chrome.Options();
                options.addArguments('--headless=new');

                return await new Builder()
                    .forBrowser('chrome')
                    .setChromeOptions(options)
                    .build();
            }

            case 'firefoxheadless': {
                const options = new firefox.Options();
                options.addArguments('-headless');

                return await new Builder()
                    .forBrowser('firefox')
                    .setFirefoxOptions(options)
                    .build();
            }

            default:
                this.log.info(`Unknown browser. Using Chrome.`);

                return await new Builder()
                    .forBrowser('chrome')
                    .build();
        }
    }
}