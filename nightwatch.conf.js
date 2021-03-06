const chromeDriver = require("chromedriver")
const geckoDriver = require("geckodriver")
const BROWSER_NAME = process.env.BROWSER_NAME
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
      // start the webdriver session automatically (enabled by default)
      auto_start_session: false
    }
  },

  test_settings: {
    default: {
      launch_url: 'https://google.com.np',

      selenium_host: 'localhost',

      globals: {},

      desiredCapabilities: {
        browserName: BROWSER_NAME  || "chrome",
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
          'webdriver.firefox.driver': geckoDriver.path
        }
      },

      screenshots : {
        enabled : SCREENSHOTS,
        on_failure : true,
        path : SCREENSHOTS_PATH
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  },
}
