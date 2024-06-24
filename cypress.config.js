const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('test:before:run', (details) => {
        console.log('Running test:', details.title);
      });

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--disable-gpu');
        }
        return launchOptions;
      });

      return config;
    },
  },
});
