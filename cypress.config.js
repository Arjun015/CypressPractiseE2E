const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  //"defaultCommandTimeout": 15000,
  //includeShadowDom:true,
  "reporter": 'cypress-mochawesome-reporter',
  e2e: {
    //baseUrl :"https://rahulshettyacademy.com/seleniumPractise/#/",
    //baseurl :"https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    //retries :{"runMode":1,"openMode":1},
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on)
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath))
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      })
    },
  },
  env: {
    baseurl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  }
});
