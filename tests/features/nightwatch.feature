Feature: Google Search
  As a user
  I want to search for different topics
  So that I can gather more information about it

  Scenario:
    Given user has browsed to the homepage
    When user searches for "Nightwatch"
    Then search results for NightwatchJS should be listed
