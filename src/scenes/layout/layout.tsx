/**
 * Layout
 * -----------------------------------------------------------------------------
 */
import React from "react"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import "./layout.scss"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Layout: React.FC = props => {
    return (
        <div id="jo-app">
            <Sidebar />
            <div id="jo-content">
                <Header />
                {props.children}
            </div>
        </div>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Layout
