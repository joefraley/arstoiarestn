/**
 * Journi Web
 * -----------------------------------------------------------------------------
 */
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import Main from "./main"
import "./locales"

localStorage.setItem(
    "journi_auth_token",
    "eyJraWQiOiJjaGFybGktYXBwLXNlcnZpY2U6MTdiZTQ2M2UiLCJhbGciOiJFUzI1NiJ9.eyJzdWIiOiIzNTBiZWE2OS0wYzU0LTQ2ODgtODk2ZS0yNDgwZjcyMjNjNTYiLCJhdWQiOiJwcm9qZWN0LXNlYW1sZXNzIiwidG9wIjpbWyIzNTBiZWE2OS0wYzU0LTQ2ODgtODk2ZS0yNDgwZjcyMjNjNTZcL1BhdGllbnRcLzY3MjE2IiwwLHsiMSI6WzBdfV0sWyIzNTBiZWE2OS0wYzU0LTQ2ODgtODk2ZS0yNDgwZjcyMjNjNTZcL1BhdGllbnRcLzY3MjE1IiwwLHsiMSI6WzBdfV0sWyIzNTBiZWE2OS0wYzU0LTQ2ODgtODk2ZS0yNDgwZjcyMjNjNTZcL1BhdGllbnRcLzI1MjM3MCIsMCx7IjEiOlswXX1dXSwidXNyIjpbIjM1MGJlYTY5LTBjNTQtNDY4OC04OTZlLTI0ODBmNzIyM2M1NiJdLCJpc3MiOiJjaGFybGktYXBwLXNlcnZpY2UiLCJleHAiOjE1ODYyOTY0NDAsImlhdCI6MTU4NjI5Mjg0MCwicm9sIjpbIm1lbWJlciIsIm93bmVyIl19.dIz0Ui6OudN4YhKdl6xDO1jw5OXHCj2o_MhIxEFiXXpEtYcTQA032u5rJRmZXBlnJmRpVyw6UiOJnxRAfUK_5g",
)
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
            <Main />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById("root"),
)
