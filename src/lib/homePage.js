var homePage = function(){
    this.homePageLink = element(by.linkText('Home'));
    this.knowledgeHubLink = element(by.linkText('Knowledge Hub'));
    this.exploreLink = element(by.linkText('Explore Places'));
    this.registerLink = element(by.id('registerLink'));
    this.loginLink = element(by.id('loginLink'));

}
module.exports.homePage = new homePage();