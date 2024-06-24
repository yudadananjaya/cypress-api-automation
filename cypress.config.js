const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Set the base URL for your tests
    viewportWidth: 1280, // Set the default viewport width
    viewportHeight: 720, // Set the default viewport height
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      
      // Example: Log test names
      on('test:before:run', (details) => {
        console.log('Running test:', details.title);
      });

      // Example: Extend browser launch options
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--disable-gpu');
        }

        return launchOptions;
      });

      // Return the updated config object
      return config;
    },
  },
  // Other Cypress configurations can be added here
});
