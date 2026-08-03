import LoginPage from "./LoginPage.js";

export default class PageInitializer {
    constructor(driver) {
        this.loginPage = new LoginPage(driver);
    }
}