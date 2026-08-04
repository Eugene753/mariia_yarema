import {Given, When, Then} from '@cucumber/cucumber';
import "dotenv/config";


Given('user is sucessfully logged in as an admin', async function () {

    await this.pages.loginPageLI.loginToOrangeHRMC(process.env.USERNAME, process.env.PASSWORD);

});

// Given('user navigate to add employee page', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// When('user fill all new employee information', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// When('click save button', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// Then('user is successfully added', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });