const { Given, When, Then } = require("cucumber")
const { expect } = require("chai")
const scope = require("./../support/scope")

Given("I am on the home page", async () => {
    const homePath = scope.host + "/home"
    await scope.context.page.goto(homePath, { waitUntil: "networkidle2" })
    const actualPath = await scope.context.page.url()
    expect(actualPath).to.equal(homePath)
})

When("I click on Settings in the sidebar", async () => {
    const sidebarButton = `[data-test="sidebar-settings-button"]`
    await scope.context.page.waitForSelector(sidebarButton)
    await scope.context.page.click(sidebarButton)
})

Then("I will be on the settings page", async () => {
    const settingsPath = scope.host + "/settings"
    const actualPath = await scope.context.page.url()
    expect(actualPath).to.equal(settingsPath)
})

Given("this step definition exists", async () => {
    return true
})
Then("the scenario should fail", async () => {
    expect(true).to.equal(false)
})
