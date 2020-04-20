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

const checkBuild = absolute_path_to_compiled_app => {
    if (!fs.existsSync(`${absolute_path_to_compiled_app}/index.html`)) {
        console.log("building app...")
        return run("npm run build:app")
    }
    console.log("app is ready to serve...")
    return Promise.resolve()
}

module.exports.startApp = async () => {
    const build = path.resolve(__filename, "../../../build")
    await checkBuild(build)
    const port = await portfinder.getPortPromise()
    console.log(`starting app on port ${port}...`)
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
            console.log(`app server up and running on http://localhost:${port}`)
            resolve({ port, server })
        })
    })
}
