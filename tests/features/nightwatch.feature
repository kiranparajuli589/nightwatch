Feature: Google Search
  As a user
  I want to search for different topics
  So that I can gather more information about it

  Background:
    Given user has browsed to the homepage

  Scenario: resonable search
    When user searches for "Nightwatch"
    Then search results for NightwatchJS should be listed

  Scenario: very unresonable search
    When user searches for "lllllllllllsssssllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"
    Then user should see no results found message
      """
      तपाइँको खोज - lllllllllllsssssllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll - कुनै कागजातमा फेला पारेन ।
      """
