/**
 * Layout
 * -----------------------------------------------------------------------------
 */
import React from "react"
import styled from "styled-components"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import { Row } from "components"

const StyledSidebar = styled(Sidebar)``
const StyledHeader = styled(Header)``

const StyledContainer = styled(Row)`
    background: ${({ theme }) => theme.palette.background.default};
    display: grid;
    grid-template-areas:
        "nav header"
        "nav main";
    grid-template-columns: minmax(190px, 200px) 1fr;
    grid-template-rows: min-content 1fr;

    ${StyledSidebar} {
        align-self: stretch;
        background: ${({ theme }) => theme.palette.primary.main};
        grid-area: nav;
        padding: ${({ theme }) => `0 ${theme.spacing.xs}`};
    }

    ${StyledHeader} {
        grid-area: header;
        padding: ${({ theme }) => theme.spacing.xxs};
        background: white;
    }

    main {
        grid-area: main;
    }
`

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Layout: React.FC = props => {
    return (
        <StyledContainer>
            <StyledSidebar />
            <StyledHeader />
            <main>{props.children}</main>
        </StyledContainer>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Layout
