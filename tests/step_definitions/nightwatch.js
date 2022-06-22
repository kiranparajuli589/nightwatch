const {Given, Then, When} = require("@cucumber/cucumber")

Given(/^user has browsed to the homepage$/, function () {
  return browser.url("https://www.google.com")
})

When(/^user searches for "([^"]*)"$/, function (keyword) {
  return browser
    .waitForElementVisible('input[name="q"]')
    .setValue('input[name="q"]', keyword)
    .waitForElementVisible('input[type="submit"]')
    .assert.enabled('input[type="submit"]')
    .click('input[type="submit"]')
})

Then(/^search results for NightwatchJS should be listed$/, function () {
  return browser
    .waitForElementVisible('#search')
    .assert.textContains('#search', 'Nightwatch.js | Node.js powered End-to-End testing framework')
})
