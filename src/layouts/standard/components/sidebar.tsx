/**
 * Sidebar
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { useHistory, matchPath } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Button, Icon } from "components"
import { IconTypes } from "components/icon/types"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Sidebar: React.FC = props => {
    /**
     * Hooks
     */
    const { t } = useTranslation()

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
                    label={t("base.home")}
                    icon="home"
                    destination="/home"
                />
                <SidebarButton
                    name="sidebar-profiles-button"
                    label={t("base.profiles")}
                    icon="family"
                    destination="/profiles"
                />
                <SidebarButton
                    name="sidebar-resources-button"
                    label={t("base.resources")}
                    icon="resources"
                    destination="/resources"
                />
                <SidebarButton
                    name="sidebar-finances-button"
                    label={t("base.finances")}
                    icon="finance"
                    destination="/finances"
                />
                <SidebarButton
                    name="sidebar-connect-button"
                    label={t("base.connect")}
                    icon="chat"
                    destination="/connect"
                />
                <SidebarButton
                    name="sidebar-settings-button"
                    label={t("base.settings")}
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
