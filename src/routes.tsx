/**
 * Routes
 *
 * TODO: Dynamically update document.title
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
import NotAuthorized from "./scenes/base/not_authorized"
import Home from "./scenes/home/home"
import Settings from "./scenes/settings/settings"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Routes: React.FC = props => {
    /**
     * Feature flags
     * TODO: Dynamically get feature flags
     */
    const features = {
        settings: true,
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
            <AppRoute
                path="/unauthorized"
                exact={true}
                component={Settings}
                isAuthorized={false}
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
        // Authenticated, but not authorized to view this feature
        <Layout>
            <NotAuthorized />
        </Layout>
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
