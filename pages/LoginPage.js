export default class DashboardPage {
    constructor(driver) {
        this.driver = driver;
    }

    async clickAdminTab() {
        const adminTab = await this.driver.findElement(
            By.xpath("//span[text()='Admin']")
        );

        await adminTab.click();
    }
}