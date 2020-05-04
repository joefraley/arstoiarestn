/* tslint:disable no-any */
import React from "react"
import { Switch, Route, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import Modal from "react-modal"
import v from "voca"
import Routes, { ProtectedRoute } from "./routes"
import { useTagging } from "utils/tagging_utils"
import "styles/journi.scss"

Modal.setAppElement("#root")
const Main: React.FC = (props) => {
    const location = useLocation()

    /**
     * Send analytics on route transitions
     */
    const [pathname, setPathname] = React.useState("")
    const tag = useTagging()
    React.useEffect(() => {
        if (location.pathname !== pathname) {
            tag({
                type: "view",
                route: location.pathname,
                previous: pathname,
            })
            setPathname(location.pathname)
        }
    }, [location.pathname, pathname, tag])

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
