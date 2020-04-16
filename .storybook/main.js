module.exports = {
    stories: ["../src/**/*.stories.[tj]sx"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-a11y/register",
        "@storybook/addon-knobs/register",
        "@storybook/addon-actions",
        "@storybook/addon-links",
    ],
}
