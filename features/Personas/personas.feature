# Feature: personas

#   AS A Journi web app tester
#   I WANT to have a set of known test personas, each with predictable, unchanging data
#   SO THAT my tests know what to expect when they refer to those personas

#   These personas represent the types of users for whom the team is developing
#   the application. The personas are used to build user empathy and shared understanding
#   of users by team members.

#   These Gherkin scenarios document the personas and ensure that the data
#   associated with each persona doesn't drift. For example, if someone accidentally
#   changes a persona's GroupID in the test database, these tests will catch that change
#   and alert us that other tests that use the same persona might also fail.

#   Scenario: Primary Regence health plan member with dependents
#     Given I am Morticia Addams, an employee with the Regence health plan who has dependents
#     And Wednesday is Morticia's dependent
#     And Pugsley is Morticia's dependent
#     Then I have this group ID:
#       | GroupID | TBD |
#     And I have this Member ID:
#       | MemberID | TBD |
#     And I have this prefix:
#       | Prefix | TBD |
#     And I have this birthday:
#       | Birthday | TBD |
#     And I have this HealthPlan link status:
#       | HealthPlan link status | linked |
#     And I have this invitation code:
#       | Invitation code | FRIENDS |
#     And I have this number of dependents:
#       | Number of dependents | 2 |
#     And I share my info with:
#       | Shares with | Lurch Addams |
#     And I have the following health data:
#       | Health data | TBD |

#   Scenario: Employee with no Regence health plan
#     Given I am Fester Addams, an employee with no Regence health plan
#     Then I have this invitation code:
#       | Invitation code | FRIENDS |
#     And I have this number of dependents:
#       | Number of dependents | 0 |
#     And I share my info with:
#       | Shares with | nobody |
#     And I have the following health data:
#       | Health data | TBD |

#   Scenario: Babysitter
#     Given I am Lurch Addams, a babysitter
#     Then I have this invitation code:
#       | Invitation code | sharing code |
#     And I have this number of dependents:
#       | Number of dependents | 0 |
#     And I share my info with:
#       | Shares with | nobody |
#     And I have the following health data:
#       | Health data | TBD, claims for shared dependents |
