import LoginPage from "./LoginPage.js";
import DashboardPage from "./DashboardPage.js";
import LoginPageLI from "./LoginPageLI.js"


export default class PageInitializer {
    constructor(driver) {
        this.loginPage = new LoginPage(driver);
        this.loginPageLI=new LoginPageLI(driver);
    }
}