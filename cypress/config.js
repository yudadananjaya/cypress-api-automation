module.exports = {
   baseUrl: 'https://reqres.in/api/login',
   reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      overwrite: false,
      html: true,
      json: true
    }
};