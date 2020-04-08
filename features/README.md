# Cucumber Testing

## TODO

-   [x] Start test server to serve single-page app
-   [ ] Create step helpers for common DOM interactions
-   [ ] Setup [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter#readme)
-   [ ] Publish Cucumber Reports somewhere

## Overview

Cucumber is a tool to assist in acceptance testing. It leverages Puppeteer as a headless browser and simulates user interactions to test that all features work as designed.

## Examples

`accounts.feature`

```gherkin
Feature: Create Account
    Scenario: Email must be unique
        Given I am on the signup page
        When I enter an existing email
        Then I see an error message
```

`accounts.step.js`

```js
const { Given, When, Then } = require("cucumber")

Given("I am on the signup page", async () => {
    // My assertion logic
})
When("And I enter an existing email", async () => {
    // My assertion logic
})
Then("I see an error message", async () => {
    // My assertion logic
})
```

## Stakeholders

The Gherkin scenarios we write and maintain will be used by more than just the **development** and **quality** teams – we use these scenarios for acceptance criteria with **product**, for documentation when selling to new **clients** and **employer groups**, and lastly to educate the **customer support** teams.

Because of the multiple stakeholders, it's our responsibility to write our `.feature` files with an understanding that teams outside our own team will read and depend on them – so it's important to use the best practices below and to also keep sensitive data and information within our `.step.js` files.

## Best Practices

### Be careful with your logic

```gherkin
# Bad
Then the results include all doctors of that gender
```

```gherkin
# Good
Then the results include only doctors of that gender
```

### Write like you talk

```gherkin
# Bad
When the user launches a gender-specific search focusing on medical practitioners of the female variety

When female doctor search
```

```gherkin
# Good
When the user searches for female doctors
```

### Avoid "Should"

```gherkin
# Bad
Then the results should be empty
```

```gherkin
# Good
Then the results are empty
```

### Avoid scenario outlines

```gherkin
# Bad
Scenario Outline: search for doctors by address
    When the user searches for doctors at <address>
    Examples:
        | address    |
        | 10 Main St |
        | 10         |
        | -7 Main St |
```

```gherkin
# Good
Scenario: search for doctors with valid address
Scenario: search for doctors with an incomplete address
Scenario: search for doctors with a non-existent address
```

### Focus on one thing per scenario

```gherkin
# Bad
When the user searches for a provider, then views their detailed profile info, then looks at the languages spoken
```

```gherkin
# Good
When the user views a provider's language
```
