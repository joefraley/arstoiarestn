/**
 * Layout
 * -----------------------------------------------------------------------------
 */
import React from "react"
import styled from "styled-components"
import Sidebar from "./components/sidebar"
import Header from "./components/header"

const StyledContainer = styled.div`
    background: ${({ theme }) => theme.palette.background.default};
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;

    #jo-content {
        display: flex;
        flex-flow: column;
        flex: 1;
    }

    #jo-sidebar {
        background: ${({ theme }) => theme.palette.primary.main};
        height: 100%;
        min-width: 190px;
        width: 200px;
    }

    .jo-sidebar-button {
        align-items: center;
        display: flex;
        flex-direction: row;
        width: 100%;
        span {
            color: ${({ theme }) => theme.palette.common.white};
        }
        &.active {
            background: ${({ theme }) => theme.palette.action.active};
        }
    }
`

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Layout: React.FC = props => {
    return (
        <StyledContainer id="jo-app">
            <Sidebar />
            <div id="jo-content">
                <Header />
                {props.children}
            </div>
        </StyledContainer>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Layout
