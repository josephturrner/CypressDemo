const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    // Reporter options
    reporter: 'mochawesome',

    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      overwrite: true, // May change later
      html: false,
      json: true,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
