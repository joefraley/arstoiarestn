Feature: Example
    In order to write Cucumber tests
    As a Journi software engineer
    I want to see a simple example

    Scenario: Navigate to settings page
        Given I am on the home page
        When I click on Settings in the sidebar
        Then I will be on the settings page

    Scenario: Navigate to settings page twice
        Given I am on the home page
        When I click on Settings in the sidebar
        Then I will be on the settings page