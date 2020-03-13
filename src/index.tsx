/**
 * Journi Web
 * -----------------------------------------------------------------------------
 */
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import "./locales"
import "./assets/styles/journi.scss"

/**
 * React Root
 * -----------------------------------------------------------------------------
 */
ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById("root"),
)
