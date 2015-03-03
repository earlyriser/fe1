// conf.js
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: '../../../node_modules/selenium-standalone-jar/bin/selenium-server-standalone-2.44.0.jar',
  chromeDriver: '../../../node_modules/chromedriver/bin/chromedriver',
  specs: ['spec.js'],

  // Capabilities to be passed to the webdriver instance. 
  capabilities: { 
      'browserName': 'chrome' 
  }, 

  directConnect: true, 

  // URL of the app you want to test. 
  baseUrl: 'http://localhost:9000/', 

  // Options to be passed to Jasmine-node. 
  jasmineNodeOpts: { 
      showColors: true, // Use colors in the command line report. 
      isVerbose: true, // List all tests in the console 
      includeStackTrace: true, 
      defaultTimeoutInterval: 30000 
  }   
}