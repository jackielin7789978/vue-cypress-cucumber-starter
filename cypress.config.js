/* eslint-disable no-undef */
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    chromeWebSecurity: false,
    baseUrl: "http://localhost:5173",
    setupNodeEvents,
  },
});
