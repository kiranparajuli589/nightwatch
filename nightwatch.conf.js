const chromeDriver = require("chromedriver")

module.exports = {
  src_folders: [
    'tests/step_definitions'
  ],

  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: 'tests/features/**/*.feature',
      auto_start_session: true
    }
  },

  test_settings: {
    default: {
      launch_url: 'https://google.com',
      selenium_host: 'localhost',
      globals: {},
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['disable-gpu', 'ignore-certificate-errors'],
          w3c: false
        },
        loggingPrefs: { browser: 'ALL' }
      },
      selenium: {
        start_process: false,
        port: 4444,
        cli_args: {
          'webdriver.chrome.driver': chromeDriver.path,
        }
      },
      webdriver: {
        start_process: false
      }
    },
  }
}
