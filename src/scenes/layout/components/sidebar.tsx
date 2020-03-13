/**
 * Sidebar
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { useHistory, matchPath } from "react-router-dom"
import { Button, Icon } from "components"
import { IconTypes } from "components/icon/types"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Sidebar: React.FC = props => {
    /**
     * Template
     */
    return (
        <div id="jo-sidebar">
            <div className="py-sm px-sm">
                <img
                    src="/img/brand_wordmark_inverted.png"
                    alt="Journi"
                    width="100%"
                />
            </div>
            <nav>
                <SidebarButton
                    name="sidebar-home-button"
                    label="Home"
                    icon="home"
                    destination="/home"
                />
                <SidebarButton
                    name="sidebar-settings-button"
                    label="Settings"
                    icon="settings"
                    destination="/settings"
                />
            </nav>
        </div>
    )
}

/**
 * Subcomponent: <SidebarButton />
 * -----------------------------------------------------------------------------
 */
const SidebarButton: React.FC<{
    readonly name: string
    readonly label: string
    readonly destination: string
    readonly icon: IconTypes
}> = props => {
    /**
     * Define hooks
     */
    const history = useHistory()

    /**
     * Determine button styles
     * TODO: Support active state for child routes
     */
    const styles = "jo-sidebar-button py-xs px-sm "
    const activeStyle = matchPath(history.location.pathname, {
        path: props.destination,
        exact: true,
    })
        ? "active"
        : ""

    /**
     * Template
     */
    return (
        <Button
            name="sidebar-settings-button"
            variant="content"
            onPress={() => history.push(props.destination)}
            className={styles + activeStyle}
        >
            <Icon type={props.icon} inverted={true} />
            <span className="ml-xxs">{props.label}</span>
        </Button>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Sidebar
