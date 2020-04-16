import { addDecorator } from "@storybook/react"
import { withA11y } from "@storybook/addon-a11y"
import { withKnobs } from "@storybook/addon-knobs"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { makeDecorator } from "@storybook/addons"
import { Reset, TypeSettings, theme } from "../src/styles"

const AllowScroll = createGlobalStyle`
    #root {
        overflow: auto;
    }
`
const withStyleReset = makeDecorator({
    name: "JourniStyleReset",
    wrapper: (getStory, context) => {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Reset />
                    <TypeSettings />
                    <AllowScroll />
                    {getStory(context)}
                </ThemeProvider>
            </>
        )
    },
})

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(withStyleReset)
