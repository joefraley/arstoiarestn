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
        scope.context.currentPage = await scope.browser.newPage()
        scope.context.currentPage.setViewport({ width, height })
        await scope.context.currentPage.goto(scope.host)
    }
})

/**
 * Reset after each test
 */
After(async () => {
    if (scope.browser && scope.context.currentPage) {
        const cookies = await scope.context.currentPage.cookies()
        if (cookies && cookies.length > 0) {
            await scope.context.currentPage.deleteCookie(...cookies)
        }
        await scope.context.currentPage.close()
        scope.context.currentPage = null
    }
})

/**
 * Reset after all tests
 */
AfterAll(async () => {
    if (scope.browser) await scope.browser.close()
    if (scope.server) await scope.server.shutdown()
})
