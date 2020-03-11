/**
 * Sidebar
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "components"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Sidebar: React.FC = props => {
    const history = useHistory()

    /**
     * Template
     */
    return (
        <div id="jo-sidebar">
            <div className="py-sm px-md">
                <img
                    src="/img/brand_wordmark_inverted.png"
                    alt="Journi"
                    width="100%"
                />
            </div>
            <nav>
                <Button
                    name="nav-home-button"
                    label="Home"
                    variant="content"
                    onPress={() => history.push("/")}
                />
                <Button
                    name="nav-home-button"
                    label="Settings"
                    variant="content"
                    onPress={() => history.push("/settings")}
                />
            </nav>
        </div>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Sidebar
