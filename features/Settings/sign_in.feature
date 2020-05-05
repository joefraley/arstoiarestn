Feature: sign in

  As a Journi user
  I want to sign in to the app
  So I can access my health data and Journi features

  These scenarios use the "Morticia Addams" persona. See `personas.feature` for more info.

  Scenario: correct credentials
    When Morticia tries to sign in
    Then she lands on the home page

  Scenario: invalid password
    When Morticia tries to sign in with an invalid password
    Then she sees an error message saying credentials are invalid

  Scenario: unregistered email
    When Morticia tries to sign in with an unregistered email
    Then she sees an error message saying credentials are invalid

  Scenario: malformed email
    When Morticia tries to sign in with malformed email
    Then she sees an error message saying the email is malformed
    And the sign in button is disabled

  Scenario: external link
    Given Morticia is not logged in
    When she clicks on a link to the "/settings" page
    Then she is redirected to the "/login" page
    And she logs in successfully
    Then she is redirected to the "/settings" page