# Feature: sign out

#   As a Journi user
#   I want to sign out of the app
#   So my health data remains secure and private

#   These scenarios use the "Morticia Addams" persona. See `personas.feature` for more info.

#   Scenario: sign out manually
#     Given Morticia is signed in
#     When she logs out
#     Then she sees the log in screen

#   Scenario: sign out when token expires
#   # Messages are listed in Sketch
#     Given Morticia is signed in
#     When her token expires
#     Then she is taken to the log in page
#     And she sees a message saying she her session has timed out