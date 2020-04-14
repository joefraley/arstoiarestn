/**
 * Journi Web
 * -----------------------------------------------------------------------------
 */
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import { ThemeProvider } from "styled-components"
import { theme, Reset, TypeSettings } from "./styles"
import Main from "./main"
import "./locales"

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_SERVICE,
    request: operation => {
        operation.setContext({
            headers: {
                authorization: localStorage.getItem("journi_auth_token"),
            },
        })
    },
})

const GlobalStyles = () => (
    <>
        <Reset />
        <TypeSettings />
    </>
)

/**
 * React Root
 *
 * If something might be different in different run-times or environments, then
 * it belongs at this layer of the component hierarchy.
 *
 * For example, you want an in-memory GraphQL client during unit testing, so the GraphQL
 * provider and client is rendered here, not in ./main.tsx
 *
 * the same can be said of a router
 * -----------------------------------------------------------------------------
 */
ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Main />
            </ThemeProvider>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById("root"),
)
