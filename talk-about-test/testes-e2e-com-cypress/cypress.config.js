const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    // baseUrl: 'https://serverless-scratch.netlify.app',
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },    
    defaultCommandTimeout: 10000,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
