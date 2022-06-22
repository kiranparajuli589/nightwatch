const {Given, Then, When, DocString} = require("@cucumber/cucumber")

const selectors = {
  searchInput: 'input[name="q"]',
  searchContent: '#search',
  notFoundMessage: '.card-section p'
}

Given(/^user has browsed to the homepage$/, function () {
  return browser.navigateTo("/")
})

When(/^user searches for "([^"]*)"$/, function (keyword) {
  return browser
    .waitForElementVisible(selectors.searchInput)
    .clearValue(selectors.searchInput)
    .setValue(selectors.searchInput, [keyword, browser.Keys.ENTER])
})

Then(/^search results for NightwatchJS should be listed$/, function () {
  const nightwatchBanner = 'Nightwatch.js | Node.js powered End-to-End testing framework'
  return browser
    .waitForElementVisible(selectors.searchContent)
    .assert.textContains(selectors.searchContent, nightwatchBanner)
})

Then(/^user should see no results found message$/, async function (message) {
  const notFoundMessage =  await browser
    .waitForElementVisible(selectors.notFoundMessage)
    .getText(selectors.notFoundMessage)
  browser.assert.equal(notFoundMessage, message)
})
