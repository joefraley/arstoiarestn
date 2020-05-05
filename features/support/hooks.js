/**
 * Cucumber Hooks
 */
const { Before, BeforeAll, After, AfterAll } = require("cucumber")
const scope = require("./scope")
const { startApp } = require("./app-server")

/**
 * Build and run a suitable instance of the application
 * this can take a minute if there is no ./build of the app yet
 * in the environment where tests are running
 */
BeforeAll({ timeout: 30 * 10000 }, async () => {
    const app = await startApp()

    scope.app_server = app.server
    scope.host = `http://localhost:${app.port}`
})

/**
 * Setup browser
 */
Before({ timeout: 10 * 10000 }, async () => {
    if (!scope.browser) {
        const { headless, width, height, args } = scope.config
        scope.browser = await scope.driver.launch({ headless, args })
        scope.context.page = await scope.browser.newPage()
        scope.context.page.on("console", (msg) =>
            console.log(`
Bowser console:

${msg.text()}
`),
        )
        await scope.context.page.setViewport({ width, height })
        await scope.context.page.goto(scope.host, { waitUntil: "networkidle0" })
        return
    }
})

/**
 * Reset after each test
 */
After(async () => {
    if (scope.browser && scope.context.page) {
        const cookies = await scope.context.page.cookies()
        if (cookies && cookies.length > 0) {
            await scope.context.page.deleteCookie(...cookies)
        }
        await scope.context.page.close()
        scope.context.page = null
    }
})

/**
 * Reset after all tests
 */
AfterAll(async () => {
    if (scope.browser) await scope.browser.close()
    if (scope.server) await scope.server.shutdown()
    if (scope.app_server) await scope.app_server.close()
})
