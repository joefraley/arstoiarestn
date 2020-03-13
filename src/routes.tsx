/**
 * Routes
 * -----------------------------------------------------------------------------
 */
import React from "react"
import {
    Switch,
    Route,
    Redirect,
    RouteProps,
    useLocation,
} from "react-router-dom"

/**
 * Scenes
 * -----------------------------------------------------------------------------
 */
import Layout from "./scenes/layout/layout"
import Login from "./scenes/base/login"
import FourOhFour from "./scenes/base/404"
import Home from "./scenes/home/home"
import Settings from "./scenes/settings/settings"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Routes: React.FC = props => {
    /**
     * Dummy auth and features
     */
    // const isAuthenticated = false
    const features = {
        settings: false,
    }

    /**
     * Routes
     */
    return (
        <Switch>
            {/* Public Routes */}
            <Route path={["/", "/login"]} exact={true} component={Login} />
            <Route path="/404" component={FourOhFour} />

            {/* Authenticated Routes */}
            <AppRoute path="/home" exact={true} component={Home} />
            <AppRoute
                path="/settings"
                exact={true}
                component={Settings}
                isAuthorized={features.settings}
            />

            {/* 404 Route */}
            <Route component={FourOhFour} />
        </Switch>
    )
}

/**
 * Subcomponent: <AppRoute />
 * -----------------------------------------------------------------------------
 */
interface AppRouteProps extends RouteProps {
    readonly isAuthorized?: boolean
}
const AppRoute: React.FC<AppRouteProps> = props => {
    /**
     * Hooks
     */
    const location = useLocation()

    /**
     * Define `authenticated` and `authorized` status
     */
    const { isAuthorized = true, ...routeProps } = props
    const isAuthenticated = true

    /**
     * Return route or redirect
     */
    return !isAuthenticated ? (
        // Not authenticated – redirect to login
        <Redirect
            to={{ pathname: "/login", state: { from: location.pathname } }}
        />
    ) : !isAuthorized ? (
        // Authenticated, but not authorized to view this scene – show 404
        <Redirect
            to={{ pathname: "/404", state: { from: location.pathname } }}
        />
    ) : (
        // All good bro – you may proceed
        <Layout>
            <Route {...routeProps} />
        </Layout>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Routes
