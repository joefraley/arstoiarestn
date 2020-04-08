/**
 * Cucumber Hooks
 */
const { Before, After, AfterAll } = require("cucumber")
const scope = require("./scope")

/**
 * Setup browser
 */
Before(async () => {
    if (!scope.browser) {
        const { headless, width, height } = scope.config
        scope.browser = await scope.driver.launch({ headless })
        scope.context.page = await scope.browser.newPage()
        await scope.context.page.setViewport({ width, height })
        await scope.context.page.goto(scope.host)
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
})
