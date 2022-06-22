const {Before , After } = require('@cucumber/cucumber');
const Nightwatch = require('nightwatch')

Before(async function({pickle}) {
  console.log(pickle)
  const browser = Nightwatch.createClient({
    browserName: 'firefox',
    capabilities: {},
    headless: false,
    env: 'firefox',
    parallel: false,
    output: false,
    desiredCapabilities: {
      name: pickle.name
    }
  }).session();
  Object.defineProperty(global, 'browser', {
    configurable: true,
    get: function () {
      return browser
    }.bind(this)
  })
})

After(async function() {
  await browser.quit()
})
