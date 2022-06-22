const {Before} = require('@cucumber/cucumber');

Before(async function(testCase) {
  if(!this.client) {
    throw new Error('No client available');
  }
  this.browser = await this.client.launchBrowser()
})
