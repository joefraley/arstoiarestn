import { addons } from "@storybook/addons"
import { create } from "@storybook/theming/create"

addons.setConfig({
    theme: create({
        brandTitle: "Journi Web",
        brandUrl: "https://journi-web-app-master.dev.janusplatform.io/",
    }),
})
