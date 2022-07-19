const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 4000,
  viewportHeight: 1028,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  env: {
    username: '',
    password: '',
  },
  projectId: 'r3qu74',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://wikipedia.org',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
