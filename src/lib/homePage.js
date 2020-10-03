var homePage = function(){
    this.homePageLink = element(by.linkText('Home'));
    this.knowledgeHubLink = element(by.linkText('Knowledge Hub'));
    this.exploreLink = element(by.linkText('Explore Places'));
    this.registerLink = element(by.id('registerLink'));
    this.loginLink = element(by.id('loginLink'));

    this.launchUrl = function(url){
        browser.get(url);
    }

    this.waitForObject = function(obj){
        browser.wait(function () { 
            return obj.isPresent();
        }, 5000);
    }

    this.clickOnObject = function(obj){
        browser.wait(function () { 
            return obj.isPresent();
        }, 5000);
        obj.click();
    }

    this.enterValue = function(obj, value){
        browser.wait(function () { 
            return obj.isPresent();
        }, 5000);
        obj.sendKeys(value);
    }
}
module.exports.homePage = new homePage();