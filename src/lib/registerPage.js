let commonClass = require('../lib/commonClass.js');

var registerPage = function () {
    this.registerHeader = element(by.cssContainingText('h2', 'Create a new account.'));
    this.registerEmailField = element(by.css('#Email'));
    this.registerPasswordField = element(by.css('#Password'));
    this.registerConfirmPasswordField = element(by.css('#ConfirmPassword'));
    this.registerButton = element(by.css('#buttonedit'));
    this.userNameTakenError = element(by.cssContainingText('li','is already taken.'));
    this.successMessage = element(by.css('div.section-title')).element(by.cssContainingText('p','Hi,'));

    this.generateRandomValue = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    this.completeRegistration = function (userName, password) {
        commonClass.commonClass.waitForObject(this.registerEmailField);
        console.log(userName)
        if (userName == "") {
            var tempUserName = this.generateRandomValue(8);
            tempUserName += "@gmail.com"
            commonClass.commonClass.enterValue(this.registerEmailField,tempUserName);
            console.log(tempUserName);
        }else{
            commonClass.commonClass.enterValue(this.registerEmailField,userName);
        }
        this.registerPasswordField.sendKeys(password);
        this.registerConfirmPasswordField.sendKeys(password);
        this.registerButton.click();
    }

}
module.exports.registerPage = new registerPage();