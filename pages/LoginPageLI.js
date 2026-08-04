import {By} from 'selenium-webdriver'
import BasePage from './BasePage'
import "dotenv/config";


export default class LoginPageLI extends BasePage{

constructor(driver){
    super(driver);

this.usernameField=By.name("username");
this.passwordField=By.name("password");
this.loginButton=By.xpath("//button[normalize-space() = 'Login']");
}


 async loginToOrangeHRMC(usernameField, password){
await this.enterText(this.usernameField, usernameField);
await this.enterText(this.passwordField, password);
await this.click(this.loginButton);
}

 
}