import { By, until  } from 'selenium-webdriver';
   
export default class LoginPage {

    constructor(driver) {
        this.driver = driver;
    }


    async login() {
    const usernameLocator = By.xpath("//input[@placeholder='Username']");
    const passwordLocator = By.xpath("//input[@placeholder='Password']");
    const loginButtonLocator = By.xpath("//*[text()=' Login ']");

    // wait until located, then wait until visible
    const username = await this.driver.wait(until.elementLocated(usernameLocator), 10000);
    await this.driver.wait(until.elementIsVisible(username), 10000);

    const password = await this.driver.wait(until.elementLocated(passwordLocator), 10000);
    await this.driver.wait(until.elementIsVisible(password), 10000);

    const loginButton = await this.driver.wait(until.elementLocated(loginButtonLocator), 10000);
    await this.driver.wait(until.elementIsVisible(loginButton), 10000);

        await username.sendKeys("Admin");
        await password.sendKeys("admin123")
        await loginButton.click();
    }
}