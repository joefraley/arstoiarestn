/* tslint:disable no-any */
import React from "react"
import { Switch, Route, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import v from "voca"
import Routes, { ProtectedRoute } from "./routes"
import "styles/journi.scss"

const Main: React.FC = props => {
    const location = useLocation()
    return (
        <>
            <Helmet>
                <title>
                    {v.titleCase(v.words(location.pathname).join(" "))}
                </title>
            </Helmet>
            <Switch>
                {Routes.map(
                    ({ protected: needsAuth, ...options }: any, index) => {
                        return needsAuth ? (
                            <ProtectedRoute
                                authorized={true}
                                authenticated={true}
                                key={index}
                                {...options}
                            />
                        ) : (
                            <Route key={index} {...options} />
                        )
                    },
                )}
            </Switch>
        </>
    )
}

export default Main
