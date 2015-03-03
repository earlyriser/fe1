// spec.js
describe('homepage', function() {

  beforeEach(function() {
    //setting windows size
    browser.driver.manage().window().setSize(600, 800);

    //non-angular app
    return browser.ignoreSynchronization = true;
  });


  it('1st test', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:9000/');


    
    expect(browser.driver.getTitle()).toEqual('yo gulp project');
  });
});

