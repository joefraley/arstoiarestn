import React from "react"
import { useHistory, matchPath } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Button, Column } from "components"
import { alignment } from "components/layout/types"
import { IconTypes } from "components/icon/types"
import styled from "styled-components/macro"

const BrandImage = styled.div`
    flex-grow: 0;
    padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
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

const SidebarButtonStyles = styled(Button)`
    justify-content: ${alignment.Start};
    padding: ${({ theme }) => `${theme.spacing.xs}`};
    flex-grow: 0;

    &.active {
        border-radius: 0;
        background: ${({ theme }) =>
            `rgba(0,0,0,${theme.palette.action.active}`});
    }
`
const SidebarButton: React.FC<{
    readonly name: string
    readonly label: string
    readonly destination: string
    readonly icon: IconTypes
}> = ({ icon, label, name, destination }) => {
    const history = useHistory()
    const active = matchPath(history.location.pathname, {
        path: destination,
        exact: true,
    })
        ? "active"
        : ""

    return (
        <SidebarButtonStyles
            className={active}
            icon={icon}
            label={label}
            name={name}
            onClick={() => history.push(destination)}
            variant="content"
        />
    )
}

export default styled(Sidebar)`
    align-self: stretch;
    background: ${({ theme }) => theme.palette.primary.main};
`
