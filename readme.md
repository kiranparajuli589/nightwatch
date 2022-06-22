# Nightwatch V2 with CucumberJS
## Selenium Service
Use the latest selenium docker container. I'm using the chrome loaded container here.

Ref: https://github.com/SeleniumHQ/docker-selenium

```shell
docker run -d --rm --network=host -v /dev/shm:/dev/shm -v ${FILES_FOR_UPLOAD:-/middleware/filesForUpload}:/uploads:ro selenium/standalone-chrome
```

## Dependencies
Install the NPM dependencies. Any package managers can be used. I'm using `npm` here.

```shell
npm i
```
The project is basically using:
- Nightwatch v2+
- Chromedriver v100+
- @cucumber/cucumber v8+

Unlike Nightwatch v1, api client is not required from v2. Also, it now provides an integrated support for using CucumberJs directly as an alternative test runner. No other plugins are necessary. 

## Nightwatch Configuration
- CucumberJs as a test runner
    ```js
    test_runner: {
        type: 'cucumber',
        options: {
          feature_path: 'tests/features/**/*.feature',
          auto_start_session: true
        }
      }
    ```
- Our own managed selenium server
    ```js
    selenium: {
        start_process: false,
        port: 4444,
        cli_args: {
          'webdriver.chrome.driver': require("chromedriver").path,
        }
    }
    ```
## Run tests
