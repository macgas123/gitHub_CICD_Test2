const { defineConfig } = require("cypress");
watchForFileChanges: false,
module.exports = defineConfig({
  
  e2e: {
    projectId: "ngicqi",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on,config)
    },
    
    specPattern:"./cypress/e2e/**/*.spec.ts"
  },
});
