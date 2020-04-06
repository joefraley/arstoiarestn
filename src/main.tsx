import React from "react"
import { Switch, Route } from "react-router-dom"
import Routes, { ProtectedRoute } from "./routes"
import "styles/journi.scss"

const Main: React.FC = props => {
    return (
        <Switch>
            {Routes.map(({ protected: needsAuth, ...options }: any, index) => {
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
            })}
        </Switch>
    )
}

export default Main
