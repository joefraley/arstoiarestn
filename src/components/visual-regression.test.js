import initStoryshots from "@storybook/addon-storyshots"
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer"
import path from "path"

// https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core
initStoryshots({
    suite: "Puppeteer storyshots",
    test: imageSnapshot({
        storybookUrl: `file://${path.resolve(__dirname, "../../styleguide")}`,
    }),
})
