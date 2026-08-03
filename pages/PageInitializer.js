import DashboardPage from "./LoginPage";

export default class PageInitializer {
    constructor(driver) {
        this.dashboardPage = new DashboardPage(driver);
    }
}