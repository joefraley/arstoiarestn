# Feature: View data on timeline

#   As a Journi user
#   I want to see medical events for myself and my dependents
#   So I can keep track of my family's health

#   # https://journi.invisionapp.com/share/ZKGFTBXNDC6#/286266670_Profiles-Timeline
#   # empty states will be separate stories
#   Scenario: user views a claim item
#     Given Morticia has a James Beard visit through claims
#     And Morticia is signed in to Journi Web
#     When Morticia navigates to her Timeline
#     Then Morticia sees the James Beard visit

#   Scenario: user views multiple claims items
#     Given Morticia has multiple provider visits through claims
#     And Morticia is signed in to Journi Web
#     When Morticia navigates to her Timeline
#     Then Morticia sees the visits in descending order by visit date

#   Scenario: user views claims items for a dependent
#     Given Pugsley has multiple provider visits through claims
#     And Morticia is signed in to Journi Web
#     When Morticia navigates to Pugsley's Timeline
#     Then Morticia sees Pugsley's visits in descending order by visit date

#   Scenario: user views a lab
#     Given Morticia has a Lab|Immunization visit through claims
#     And Morticia is signed in to Journi Web
#     When Morticia navigates to her Timeline
#     Then Morticia sees the Lab visit
#     And the visit is labeled as "Lab"|"Immunization"
