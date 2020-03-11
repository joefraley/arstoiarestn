/**
 * Routes
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { Route } from "react-router-dom"
import Layout from "./scenes/layout/layout"
import Login from "./scenes/auth/login"
import Home from "./scenes/home/home"
import Settings from "./scenes/settings/settings"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Routes: React.FC = props => {
    /**
     * TODO: App Loading State
     */

    /**
     * TODO: Unauthenticated Routes
     */

    /**
     * Authenticated Routes
     */
    return (
        <Layout>
            <Route path="/" exact={true} component={Home} />
            <Route path="/settings" exact={true} component={Settings} />
            <Route path="/login" exact={true} component={Login} />
        </Layout>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Routes
