# Currently a new user needs to be created for every test
# TODO: Automate closing chat after each test when Pager makes that possible
Background:      
    Given Morticia is logged in     
    Given The time is during availability hours

Scenario: Given A chat is not currently open
When Morticia opens a chat
Then Morticia sees an open chat
And A care guide also sees the chat
And The care guide sees the intent
And The care guide sees the note
And The care guide sees the location or default location

Scenario: user sees new messages
Given Morticia has an open chat
When The care guide sends "Hello" to Morticia
Then Morticia sees "Hello"

Scenario: The care guide sees the message
Given Morticia has an open chat
When Morticia sends "Hello"
Then The care guide sees "Hello"

Scenario: The user receives alert for new message
Given Morticia has an open chat 
And Morticia is not currently viewing an open chat
And Morticia receives an new message
When Morticia clicks on the new message alert
Then Morticia returns to the chat

Scenario: User views chat history
Given Morticia has a previous chat
When Morticia opens chat history
Then Morticia sees her previous chat

Scenario: User returns to open chat
Given Morticia has an open chat
When Morticia views her chat history
Then Morticia sees her open chat

Scenario: The user receives alert that chat is closed
Given Morticia has an open chat
When A care guide closes the chat
Then Morticia receives alert that the chat is closed