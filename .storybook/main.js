const path = require("path")

module.exports = {
    stories: ["../src/**/*.stories.[tj]sx"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-knobs/register",
        "@storybook/addon-actions",
        "@storybook/addon-a11y/register",
        "@storybook/addon-links",
    ],
    webpackFinal: async config => {
        config.resolve.modules.push(path.resolve(__dirname, "../src"))
        return config
    },
}
