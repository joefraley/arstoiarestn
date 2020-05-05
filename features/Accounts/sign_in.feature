# Feature: sign in

#   As a Journi user
#   I want to sign in to the app
#   So I can access my health data and Journi features

#   These scenarios use the "Morticia Addams" persona. See `personas.feature` for more info.

#   Scenario: user can sign in
#     When Morticia tries to sign in
#     Then Morticia lands on the home page

#   Scenario: user tries to sign in with invalid password
#   # Messages are listed in Sketch
#     When Morticia tries to sign in with an invalid password
#     Then Morticia sees an error message saying credentials are invalid

#   Scenario: user tries to sign in with unregistered email
#   # Messages are listed in Sketch
#     When Morticia tries to sign in with an unregistered email
#     Then Morticia sees an error message saying credentials are invalid

#   Scenario: user tries to sign in with malformed email
#   # Messages are listed in Sketch
#     When Morticia tries to sign in with malformed email
#     Then Morticia sees an error message saying the email is malformed
#     And the sign in button is disabled