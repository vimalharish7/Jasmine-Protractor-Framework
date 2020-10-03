let commonClass = require('../lib/commonClass.js');
let registerPage = require('../lib/registerPage.js');
let sampleData = require('../data/dataValue.js');

describe('Test Case 1', function () {
    it('1.1 Launch the Home Page', function () {
        commonClass.commonClass.launchUrl('https://caringsquaredeployment.azurewebsites.net/');
        commonClass.commonClass.waitForObject(commonClass.commonClass.homePageLink);
    });
    it('1.2 Navigate to User Registration Page', function () {
        commonClass.commonClass.clickOnObject(commonClass.commonClass.registerLink);
        commonClass.commonClass.waitForDisplayedObject(registerPage.registerPage.registerHeader);
        var name = sampleData.dataValue.userName;
        console.log(name);
        registerPage.registerPage.completeRegistration(sampleData.dataValue.userName, sampleData.dataValue.password);
        commonClass.commonClass.waitForDisplayedObject(registerPage.registerPage.userNameTakenError);
        registerPage.registerPage.completeRegistration("", sampleData.dataValue.password);
        commonClass.commonClass.waitForDisplayedObject(registerPage.registerPage.successMessage);
    });
    it('', function () {
    
     });
    it('', function () { });
});

