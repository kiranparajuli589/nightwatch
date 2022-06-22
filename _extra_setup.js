const {Before} = require('@cucumber/cucumber');

Before(async function(testCase) {
  if(!this.client) {
    throw new Error('No client available');
  }
  console.log("----------------------------------------------")
  console.log(this.client)
  console.log("----------------------------------------------")
  this.client.updateCapabilities({
    testCap: 'testing-101-kiran-parajuli'
  })
  this.browser = await this.client.launchBrowser()
})
