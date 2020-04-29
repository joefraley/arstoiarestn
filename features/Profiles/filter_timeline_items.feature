Feature: Filter timeline items

As a Journi user
I want to filter my timeline items
So I can easily find the records I'm looking for

Background: 
Given Morticia is logged in

Scenario: no filters applied upon log in
Given Morticia is not logged in
When she logs in
And she views her timeline
Then no filters are active

Scenario: filters persist through session
Given Morticia filters her timeline items for labs in the last 90 days
When she views another page
And she returns to the timeline
Then her timeline is filtered for labs in the last 90 days

Scenario: filter by date range
When Morticia filters her timeline for records only in the last year
Then she sees only records from the last year

Scenario: by record type
When Morticia filters her timeline for only <record type>
Then she sees only records from <record type>

Examples:
|record type|
|Dental|
|Immunization|
|Labs|
|Medical|
|Medications|
|My items|
|Chats|
|Surgery|
|Vision|


Scenario: filter by doctor
When Morticia filters for records with Helen Anderson as the provider
Then she sees only records where Helen Anderson is the provider

Scenario: filter by facility
When Morticia filters for records at Hale Community Health Clinic
Then she sees only records at Hale Community Health Clinic

Scenario: filter by condition

Scenario: clear filters

Scenario: filter to no results

Scenario: filter states when no records available
- 

Scenario: multiple filters across types
By type, we mean record type or doctor or date

Scenario: multiple filters within a type
By type, we mean record type or doctor or date
