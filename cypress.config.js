const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //"defaultCommandTimeout": 15000,
  "reporter": 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl :"https://rahulshettyacademy.com/seleniumPractise/#/",
    //baseurl :"https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    //retries :{"runMode":1,"openMode":1},
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
  env :{
    baseurl :"https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    URL :"https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    url :"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  }
});
