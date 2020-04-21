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
import styled, { useTheme } from "styled-components"

const BrandImage = styled.div`
    flex-grow: 0;
    padding: ${({ theme }) => `${theme.spacing.xxs} 0`};
`

const StyledNav = styled(Column).attrs({ as: "nav" })`
    color: ${({ theme }) => theme.palette.common.white};
    align-self: ${alignment.Stretch};
    padding: ${({ theme }) => `${theme.spacing.xxs} 0`};
`

const Sidebar: React.FC = props => {
    const { t } = useTranslation()

    return (
        <Column vertical={alignment.Start} as="aside" {...props}>
            <BrandImage>
                <img src="/img/brand_wordmark_inverted.png" alt="Journi" />
            </BrandImage>
            <StyledNav
                vertical={alignment.Stretch}
                horizontal={alignment.Stretch}
            >
                <SidebarButton
                    destination="/home"
                    icon="home"
                    label={t("base.home")}
                    name="sidebar-home-button"
                />
                <SidebarButton
                    destination="/profiles"
                    icon="family"
                    label={t("base.profiles")}
                    name="sidebar-profiles-button"
                />
                <SidebarButton
                    destination="/resources"
                    icon="resources"
                    label={t("base.resources")}
                    name="sidebar-resources-button"
                />
                <SidebarButton
                    destination="/finances"
                    icon="finance"
                    label={t("base.finances")}
                    name="sidebar-finances-button"
                />
                <SidebarButton
                    destination="/connect"
                    icon="chat"
                    label={t("base.connect")}
                    name="sidebar-connect-button"
                />
                <SidebarButton
                    destination="/settings"
                    icon="settings"
                    label={t("base.settings")}
                    name="sidebar-settings-button"
                />
            </StyledNav>
        </Column>
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
    const theme: any = useTheme()
    const activeStyle = matchPath(history.location.pathname, {
        path: props.destination,
        exact: true,
    })
        ? "active"
        : ""

    return (
        <Button
            style={{
                justifyContent: alignment.Start,
                padding: 0,
                flexGrow: 0,
                marginBottom: theme.spacing.xxs,
            }}
            className={activeStyle}
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
