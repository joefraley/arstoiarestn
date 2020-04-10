/**
 * Cucumber Hooks
 */
const { Before, BeforeAll, After, AfterAll } = require("cucumber")
const scope = require("./scope")

/**
 * Build and run a suitable instance of the application
 * this can take a minute if there is no ./build of the app yet
 * in the environment where tests are running
 */
BeforeAll({ timeout: 30 * 10000 }, async () => {
    const portfinder = require("portfinder")
    const path = require("path")
    const { spawn } = require("child_process")
    const fs = require("fs")
    const run = command =>
        new Promise((resolve, reject) => {
            const [exec, ...args] = command.split(" ")
            const process = spawn(exec, args)
            process.stdout.on("data", data => {
                console.log(`${data}`)
            })

            process.stderr.on("data", data => {
                console.error(`${data}`)
            })

            process.on("error", error => {
                console.error(`${error.message}`)
            })

            process.on("close", code => {
                console.log("closing process...")
                if (code === 0) resolve()
                else reject(code)
            })
        })

    const build = path.resolve(__filename, "../../../build")
    const checkBuild = () => {
        if (!fs.existsSync(`${build}/index.html`)) {
            console.log("building app...")
            return run("npm run build")
        }
        console.log("app is ready to serve...")
        return Promise.resolve()
    }
    const startApp = port => {
        console.log("starting app...")
        const handler = require("serve-handler")
        const http = require("http")
        const server = http.createServer((request, response) => {
            return handler(request, response, {
                public: build,
                rewrites: [{ source: "*", destination: `/index.html` }],
            })
        })

        return new Promise(resolve => {
            server.listen(port, () => {
                console.log(
                    `app server up and running on http://localhost:${port}`,
                )
                resolve({ port, server })
            })
        })
    }
    const getPort = () => portfinder.getPortPromise()

    await checkBuild()
    const port = await getPort()
    const app = await startApp(port)
    scope.app_server = app.server
    scope.host = `http://localhost:${app.port}`
})

/**
 * Setup browser
 */
Before({ timeout: 10 * 10000 }, async () => {
    if (!scope.browser) {
        const { headless, width, height } = scope.config
        scope.browser = await scope.driver.launch({ headless })
        scope.context.page = await scope.browser.newPage()
        scope.context.page.on("console", msg =>
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
