const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "defaultCommandTimeout": 15000,
  e2e: {
    //retries :{"runMode":1,"openMode":1},
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env :{
    URL :"https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  }
});
