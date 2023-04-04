const { defineConfig } = require('cypress')

module.exports = defineConfig({
  __dirname: 'cypress/fixtures',
  retries: {
    runMode: 2,
    openMode: 1,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-reports',
    overwrite: false,
    charts: true,
    html: true,
    json: false,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    timestamp: 'ddmmyyyy_HH-MM-ss',
  },
  video: true,
  videoCompression: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  numTestsKeptInMemory: 0,
  watchForFileChanges: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})