/**
 * Sidebar
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { useHistory, matchPath } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Button, Column } from "components"
import { alignment } from "components/layout/types"
import { IconTypes } from "components/icon/types"

const Sidebar: React.FC = props => {
    const { t } = useTranslation()

    return (
        <div id="jo-sidebar">
            <div className="py-sm px-sm">
                <img
                    src="/img/brand_wordmark_inverted.png"
                    alt="Journi"
                    width="100%"
                />
            </div>
            <Column
                as="nav"
                horizontal={alignment.Stretch}
                style={{ color: "white" }}
            >
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
            </Column>
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
    const history = useHistory()

    const styles = "jo-sidebar-button py-xs px-sm "
    const activeStyle = matchPath(history.location.pathname, {
        path: props.destination,
        exact: true,
    })
        ? "active"
        : ""

    return (
        <Button
            className={styles + activeStyle}
            icon={props.icon}
            label={props.label}
            name={props.name}
            onClick={() => history.push(props.destination)}
            variant="content"
        />
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Sidebar
