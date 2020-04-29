import { addDecorator } from "@storybook/react"
import { withA11y } from "@storybook/addon-a11y"
import { withKnobs } from "@storybook/addon-knobs"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { makeDecorator } from "@storybook/addons"
import { Reset, TypeSettings, theme } from "../src/styles"
import { Router, Route } from "react-router-dom"
import { createMemoryHistory } from "history"

const AllowScroll = createGlobalStyle`
    #root {
        overflow: auto;
        justify-content: center;
        align-items: center;
    }
`
const withStyleReset = makeDecorator({
    name: "JourniStyleReset",
    wrapper: (story, context) => {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Reset />
                    <TypeSettings />
                    <AllowScroll />
                    <Router history={createMemoryHistory()}>
                        <Route path="/" component={() => story(context)} />
                    </Router>
                </ThemeProvider>
            </>
        )
    },
})

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(withStyleReset)
