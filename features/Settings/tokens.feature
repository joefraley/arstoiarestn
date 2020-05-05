Feature: access token persistence
    
    As a Journi user
    
    Scenario: user refreshes page, stays logged in
        Given Morticia is logged in
        When she refreshes her page
        Then she is still logged in

    Scenario: user opens a new tab, stays logged in
        Given Morticia is logged in 
        When she opens Journi in a new tab
        Then she is still logged in in the new tab

    Scenario: user closes browser, is logged out
        Given Morticia is logged in
        And she closes her browser
        When she opens Journi
        Then she is logged out

    Scenario: user is logged out due to inactivity
        Given Morticia is logged in
        And she has not interacted with the app for 45 minutes
        And she sees a message asking to stay logged in
        When she does nothing
        Then she is logged out

    Scenario: user chooses to stay logged in after inactivity
        Given Morticia is logged in
        And she has not interacted with the app for 45 minutes
        And she sees a message asking to stay logged in
        When she says "yes"
        Then she is still logged in