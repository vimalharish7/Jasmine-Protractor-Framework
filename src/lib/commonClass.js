var commonClass = function(){
    this.homePageLink = element(by.linkText('Home'));
    this.knowledgeHubLink = element(by.linkText('Knowledge Hub'));
    this.exploreLink = element(by.linkText('Explore Places'));
    this.registerLink = element(by.id('registerLink'));
    this.loginLink = element(by.id('loginLink'));

    this.launchUrl = function(){
        browser.get('https://caringsquaredeployment.azurewebsites.net/');
    }

    this.waitForObject = function(obj){
        browser.wait(function () { 
            return obj.isPresent();
        }, 5000);
    }

    this.waitForDisplayedObject = function(obj){
        browser.wait(function () { 
            return obj.isDisplayed();
        }, 5000);
    }

    this.clickOnObject = function(obj){
        browser.wait(function () { 
            return obj.isPresent();
        }, 5000);
        obj.click();
    }

    this.enterValue = function(object, value){
        browser.wait(function () { 
            return object.isPresent();
        }, 5000);
        object.clear();
        object.sendKeys(value);
    }

    
}
module.exports.commonClass = new commonClass();