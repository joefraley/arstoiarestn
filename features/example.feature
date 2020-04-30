Feature: Example
    In order to write Cucumber tests
    As a Journi software engineer
    I want to see an example of a simple test

    Scenario: Navigate to settings page
        Given I am on the home page
        When I click on Settings in the sidebar
        Then I will be on the settings page

    Scenario: This should fail
        Given this step definition doesn't exist
        Then the scenario should fail