var HtmlReporter = require('C:/Users/LEGION/AppData/Roaming/npm/node_modules/protractor/node_modules/protractor-beautiful-reporter');

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['..//..//src//specs//caringSquare.js'],

  onPrepare: function()
  {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
     // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
     jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'src/Reports/screenshots'
   }).getJasmine2Reporter());

  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
