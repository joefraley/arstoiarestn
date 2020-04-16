import initStoryshots from "@storybook/addon-storyshots"
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer"

// https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core
initStoryshots({
    suite: "Puppeteer storyshots",
    test: imageSnapshot({
        storybookUrl: process.env.REACT_APP_STORYBOOK_URL,
        getGotoOptions: () => {
            return {
                waitUntil: "networkidle0",
            }
        },
    }),
})
