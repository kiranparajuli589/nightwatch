const chromeDriver = require("chromedriver")
const BROWSER_NAME = process.env.BROWSER_NAME || "chrome"
const SCREENSHOTS = process.env.SCREENSHOTS === "true"
const SCREENSHOTS_PATH = process.env.SCREENSHOTS_PATH || 'tests/screenshots'

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
      launch_url: 'https://google.com.np',

      selenium_host: 'localhost',

      globals: {},

      desiredCapabilities: {
        browserName: BROWSER_NAME,
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
      },

      screenshots : {
        enabled : SCREENSHOTS,
        on_failure : true,
        path : SCREENSHOTS_PATH
      }
    },
  },
}
