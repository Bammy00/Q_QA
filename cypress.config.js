const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler());
      // Implement node event listeners here
    },
    specPattern: ["cypress/e2e/features/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    chromeWebSecurity: false,
    baseUrl: "https://demo.seleniumeasy.com/"
  },
});
