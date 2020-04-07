/* tslint:disable no-any */

/**
 * Routes
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { Route, Redirect, useLocation, RouteProps } from "react-router-dom"
import * as Layouts from "layouts"

import Home from "./home"
import Login from "./login"
import Error from "./error"
import NotAuthorized from "./not-authorized"
import Settings from "./settings"

export const ProtectedRoute = ({
    authorized,
    authenticated,
    exact,
    path,
    component,
}: any) => {
    /**
     * Hooks
     */
    const location = useLocation()

    return !authorized ? (
        // Not authenticated – redirect to login
        <Redirect
            to={{ pathname: "/login", state: { from: location.pathname } }}
        />
    ) : !authorized ? (
        // Authenticated, but not authorized to view this feature
        <Redirect
            to={{
                pathname: "/unauthorized",
                state: { from: location.pathname },
            }}
        />
    ) : (
        <Route path={path} component={component} exact={exact} />
    )
}

function withStandardLayout<T extends RouteProps>(
    Component: React.ComponentType<T>,
): any {
    return (props: T) => {
        return (
            <Layouts.Standard>
                <Component {...props} />
            </Layouts.Standard>
        )
    }
}

export default [
    {
        path: ["/", "/login"],
        exact: true,
        component: withStandardLayout(Login),
        protected: false,
    },
    {
        exact: true,
        path: "/home",
        component: withStandardLayout(Home),
        protected: true,
    },
    {
        path: "/settings",
        component: withStandardLayout(Settings),
        protected: true,
    },
    {
        exact: true,
        path: "/unauthorized",
        component: withStandardLayout(NotAuthorized),
        protected: true,
    },
    {
        path: "/404",
        component: withStandardLayout(Error),
        protected: false,
    },
    {
        component: withStandardLayout(Error),
        protected: false,
    },
]
