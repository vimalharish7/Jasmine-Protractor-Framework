let homePage = require('../lib/homePage.js');

describe('User Story 1: As a User, I should be able to find Places of Interest so that I can work on planning activities.', function () {
    it('1.1 User able to Navigate to Places List from navigation bar.', function () {

        homePage.homePage.launchUrl('https://caringsquaredeployment.azurewebsites.net/');
        homePage.homePage.waitForObject(homePage.homePage.registerLink);
    });
    it('1.2 User is able to view the list of places with details such as Name, Address, Type of place and its category of interest.', function () { });
    it('1.3 User is able to view the exact location by clicking on a place in map.', function () {
        
        expect(homePage.homePage.registerLink.isPresent()).toBe(true);
        browser.actions().mouseMove(homePage.homePage.registerLink).click().perform();
        browser.sleep(5000);
     });
    it('1.4 User is able to view additional places by navigating to other pages of the table.', function () { });
});

